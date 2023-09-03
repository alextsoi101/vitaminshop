import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const LoaderBar = () =>  {

  const style = {
    height: '100%',
    width: '100%',
    borderRadius: '0px',
    backgroundColor: '#F4F4F4',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#F8F8F8',
      borderRadius: '0px'
    }
  };

  return (
    <LinearProgress
      sx={style}
    />
  )
}

export default LoaderBar;