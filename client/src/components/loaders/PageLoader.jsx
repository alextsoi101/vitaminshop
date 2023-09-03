import React from 'react';
import logo from '../../assets/images/logo.png';
import CircularProgress from '@mui/material/CircularProgress';

const AppLoader = () => {
  return (
    <div className="pageloader-wrapper">
      <div className="pageloader">
        <img 
          className="header-logo"
          src={logo} 
          alt="logo" 
        />
        <div className="loader-wrapper">
          <CircularProgress
            sx={{color: '#17AF26'}}
            size={83}
            thickness={4}
          />
        </div>
      </div>
    </div>
  )
}

export default AppLoader;