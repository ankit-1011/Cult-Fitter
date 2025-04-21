import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent={'space-around'} sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: '32px', xs: "20px" }, justifyContent: 'none' }} px="20px" >
      <Link>
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 transition-transform duration-300 hover:scale-110 border:"
          />
          <p className="text-sky-950 text-lg font-bold shadow-md shadow-sky-300">
            Fitness-Freak
          </p>
        </div>
      </Link>
      <Stack direction='row' gap="40px" fontSize="24px" alignItems={'flex-end'} />

      <Link 
  to="/" 
  className="hover:scale-110 transition-transform duration-300 px-3 py-1 text-[#3A1212] border-[#FF2625] text-lg font-medium hover:text-blue-500"
>
  Home
</Link>
      <a href="#exercises"  className='text-[#3A1212] hover:text-blue-500 hover:scale-110 transition-colors duration-300'>Exercises</a>
    </Stack>
  )
}

export default Navbar