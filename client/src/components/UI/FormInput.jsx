import React from 'react';

const FormInput = (props) => {
  return (
    <div className="forminput">
      <label 
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      <input
        className="form-input"
        type="text"
        value={props.value}
        id={props.inputId}
        placeholder={props.placeholder} 
        onChange={props.changeInput}
      />
    </div>
  )
}

export default FormInput;