import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AuthFormPasswordInput = (props) => {

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const toggleShow = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  const visibleIcon = 
    <VisibilityIcon
      sx={{color: "#717378", fontSize: "24px"}}
    />

  const hiddenIcon = 
    <VisibilityOffIcon
      sx={{color: "#717378", fontSize: "24px"}}
    />

  return (
    <div className="authforminputpassword">
      <label
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      <div className="input-container">
        <input
          className="authform-input"
          type={isPasswordShow ? 'text' : 'password'}
          id={props.inputId}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <button 
          className='toggle-btn'
          type="button"
          onClick={toggleShow}
        >
          {isPasswordShow ? visibleIcon : hiddenIcon}
        </button>
      </div>
    </div>
  )
}

export default AuthFormPasswordInput;