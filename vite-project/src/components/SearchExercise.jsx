import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, Stack, TextField, Typography, CircularProgress } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { fetchData } from "../utils/fetchData";

const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": 'd0a284415dmsheb306b9e7ad4ce9p1c369fjsn5f81a774c680',
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

const SearchExercise = ({ setBodyPart, bodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Exercise Categories Only Once
  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        setBodyParts(["ALL", ...bodyPartsData]);
       
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };

    fetchExercisesData();
  }, []);

  // Optimized search function using `useCallback`
  const handleSearch = useCallback(async () => {
    if (!search.trim()) return; // Prevent unnecessary API calls

    setLoading(true);
    try {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
    
      const filteredExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase())
      );

      setSearch("");
      setExercises(filteredExercises);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  }, [search, setExercises]);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px" justifyContent='center'
      >
      Awesome Exercises You  Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises!"
          type="text"
        />
        <Button
          className="search-btn "
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      
  
      </Box>
    </Stack>
  )
};

export default SearchExercise;