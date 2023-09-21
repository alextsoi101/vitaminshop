import React from "react";

const AdminPanelInput = (props) => {
  return (
    <div className="adminpanelinput">
      <div className="adminpanelinput-label">
        {props.label}
      </div>
      <div className="input-container">
        <input 
          className="input-field"
          type='text' 
          placeholder={props.placeholder}
          onChange={props.onChange}
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