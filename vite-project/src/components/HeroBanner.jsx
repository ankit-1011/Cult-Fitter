import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import '../App.css'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: "70px" }, ml: { sm: "50px" } }} position='relative' p='20px' className='Hero-Back'>
            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb=''>
                Sweat ,Smile &<br></br> Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises!
            </Typography>
            <Button variant='contained' href='#excercises' sx={{ backgroundColor: '#ff2625', padding: '10px' }}>Explore Exercises</Button>
            <Typography fontWeight={600} color='#ff2625' sx={{ opacity: 0.1, display: { lg: "block", xs: 'none' } }} fontSize='200px'>
                Exercises
            </Typography>
            <img src={HeroBannerImage} className='hero-banner-img hover:scale-104 transition ease-in-out duration-300 '   style={{
            left:"500px",top:"100px",width:"600px",height:"800px",borderRadius:"30px"
          }} />
        </Box>
    )
}

export default HeroBanner;