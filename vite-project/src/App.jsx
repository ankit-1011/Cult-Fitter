import React, { useState } from 'react'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';


const App = () => {


  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
 <Footer/>
    </Box>
  )
}

export default App