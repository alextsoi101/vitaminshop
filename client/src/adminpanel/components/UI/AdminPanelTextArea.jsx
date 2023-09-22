import React from "react";

const AdminPanelTextArea = (props) => {
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
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default AdminPanelTextArea;