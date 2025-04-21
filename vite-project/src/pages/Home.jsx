import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercise'
import Exercises from '../components/Exercises'
import Box from '@mui/material/Box';
import { Footer } from '../components/Footer';

const Home = () => {
  const [bodyPart,setBodyPart]=useState("all")
  const [exercises,setExercises]=useState([])

  return (
     <Box>
       <HeroBanner/>
       <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
       <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
       {/* <Footer/> */}
     </Box>
  )
}

export default Home;