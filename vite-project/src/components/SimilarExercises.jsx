// SimilarExercises.js
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SwiperCarousel from './SwiperCarousel';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        <SwiperCarousel data={targetMuscleExercises} />
      </Stack>

      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        <SwiperCarousel data={equipmentExercises} />
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
