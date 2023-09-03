import React from 'react';
import logo from '../../assets/images/logo.png';
import LinearProgress from '@mui/material/LinearProgress';

const AppLoader = () => {
  return (
    <div className="apploader-wrapper">
      <div className="apploader">
        <img 
          className="header-logo"
          src={logo} 
          alt="logo" 
        />
        <div className="loader-wrapper">
          <LinearProgress 
            thickness={20}
            sx={{
              width: '90%',
              height: '8px',
              borderRadius: '100px',
              backgroundColor: '#89be8e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#17AF26',
                borderRadius: '100px'
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default AppLoader;