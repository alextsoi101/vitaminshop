import React, { useState, useEffect } from "react";

const AdminPanelDateInput = (props) => {

  const [inputValue, setInputValue] = useState(props.defaultValue);

  useEffect(() => {
    if (props.defaultValue) {
      setInputValue(props.defaultValue)
    }
  }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="adminpaneldateinput">
      <div className="adminpaneldateinput-label">
        {props.label}
      </div>
      <div className="input-container">
        <input 
          className="input-field"
          type='date'
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  )
}

export default AdminPanelDateInput;