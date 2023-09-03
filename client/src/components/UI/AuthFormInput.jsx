import React from 'react';

const AuthFormInput = (props) => {
  return (
    <div className="authforminput">
      <label
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      <input
        className="authform-input"
        type="text"
        id={props.inputId}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default AuthFormInput;