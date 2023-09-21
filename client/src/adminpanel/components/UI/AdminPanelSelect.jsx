import React from "react";

const AdminPanelSelect = (props) => {
  return (
    <div className="adminpanelselect">
      <div className="adminpanelselect-label">
        {props.label}
      </div>
      <div className="select-container">
        <select
          className="select-field"
          type='text'
          placeholder={props.placeholder}
          onChange={props.onChange}
        >
          {
            props.options.map(option =>
              <option>
                {option}
              </option>
            )
          }
        </select>
      </div>
    </div>
  )
}

export default AdminPanelSelect;