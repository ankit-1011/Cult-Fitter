import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ExcerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

      <Stack direction="row">
        <Button sx={{ ml: '21px', color: 'blue', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: 'blue', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color="#000" fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='24px'>
        {exercise.name}
      </Typography>
    </Link>


  )
}

export default ExcerciseCard