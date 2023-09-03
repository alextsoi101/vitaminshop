import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = (props) =>  {

  const style = {
    height: '5px',
    borderRadius: '100px',
    backgroundColor: '#C8C9CB',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#17AF26',
      borderRadius: '100px'
    }
  };

  return (
    <LinearProgress 
      variant="determinate" 
      value={props.progress} 
      sx={style}
    />
  )
}

export default ProgressBar;