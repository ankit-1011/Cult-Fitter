import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';//youtubeOptions 


const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([''])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetailData);
    };
    fetchExerciseDetail();
  }, [id]);
  
  useEffect(() => {
    if (exerciseDetail.target) {
      const fetchTargetMuscleExercises = async () => {
        const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExerciseData);
      };
      fetchTargetMuscleExercises();
    }
  }, [exerciseDetail]);//
  
  useEffect(() => {
    if (exerciseDetail.equipment) {
      const fetchEquipmentExercises = async () => {
        const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExerciseData);
      };
      fetchEquipmentExercises();
    }
  }, []);//exerciseDetail

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail;