import React, { useState, useEffect } from "react";

const AdminPanelInput = (props) => {

  const [inputValue, setInputValue] = useState(props.defaultValue);

  useEffect(() => {
    if (props.defaultValue) {
      setInputValue(props.defaultValue)
      props.onChange(props.defaultValue)
    }
  }, [props.defaultValue])

  const handleChange = (e) => {
    setInputValue(e.target.value)
    props.onChange(e.target.value)
  }

  return (
    <div className="adminpanelinput">
      <div className="adminpanelinput-label">
        {props.label}
      </div>
      <div className="input-container">
        <input 
          className="input-field"
          type={props.type || 'text'}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />
        { props.suffix &&
          <div className="suffix-field">
            {props.suffix}
          </div>
        }
      </div>
    </div>
  )
}

export default AdminPanelInput;