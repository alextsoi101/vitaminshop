import React from 'react';

const MyAccountInput = (props) => {
  return (
    <div className="myaccountinput">
      <label
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      <input
        className="myaccount-input"
        type="text"
        id={props.inputId}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.changeInput}
      />
    </div>
  )
}

export default MyAccountInput;