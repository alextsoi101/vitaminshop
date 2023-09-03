import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ButtonLoader = () => {
  return (
    <CircularProgress 
      sx={{color: 'white'}} 
      size={26}
      thickness={4}
    />
  )
}

export default ButtonLoader;