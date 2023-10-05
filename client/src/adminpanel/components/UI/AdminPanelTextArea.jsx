import React, { useState, useEffect } from "react";

const AdminPanelTextArea = (props) => {

  const [textAreaValue, setTextAreaValue] = useState(null);

  useEffect(() => {
    if (props.defaultValue) {
      setTextAreaValue(props.defaultValue)
      props.onChange(props.defaultValue)
    }
  }, [props.defaultValue])

  const handleChange = (e) => {
    setTextAreaValue(e.target.value)
    props.onChange(e.target.value)
  }

  return (
    <div className="adminpaneltextarea">
      <div className="adminpaneltextarea-label">
        {props.label}
      </div>
      <div className="input-container">
        <textarea 
          className="textarea-field"
          type='text'
          placeholder={props.placeholder}
          value={textAreaValue}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  )
}

export default AdminPanelTextArea;