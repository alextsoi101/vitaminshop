import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const AdminPanelSelectMany = (props) => {

  const [chips, setChips] = useState([]);

  const addChip = (e) => {
    if (chips.includes(e.target.value)) return
    setChips([...chips, e.target.value])
  }

  const removeChip = (chip) => {
    setChips(chips.filter(item => item !== chip))
  }

  return (
    <div className="adminpanelselectmany">
      <div className="adminpanelinput-label">
        {props.label}
      </div>
      <div className="chips-container">
        {
          chips.map((chip, index) => 
            <div 
              key={index}
              className="chip"
            >
              <div>{chip}</div>
              <button
                className="remove-button"
                onClick={() => removeChip(chip)}
              >
                <CloseIcon sx={{fontSize: '14px'}}/>
              </button>
            </div>
          )
        }
      </div>
      <div className="select-container">
        <select
          className="select-field"
          type='text'
          placeholder={props.placeholder}
          onChange={event => addChip(event)}
        >
          {
            props.options.map((option, index) =>
              <option 
                key={index}
                value={option.text}
              >
                {option.text}
              </option>
            )
          }
        </select>
      </div>
    </div>
  )
}

export default AdminPanelSelectMany;