import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const AdminPanelChipsInput = (props) => {

  const [addValue, setAddValue] = useState(null);
  const [chips, setChips] = useState([]);

  const handleChange = (e) => {
    setAddValue(e.target.value)
  }

  const addChip = () => {
    if (chips.includes(addValue)) return
    if (addValue === null) return
    if (!addValue.trim().length) return
    setChips([...chips, addValue])
  }

  const removeChip = (chip) => {
    setChips(chips.filter(item => item !== chip))
  }

  return (
    <div className="adminpanelchipsinput">
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
      <div className="input-container">
        <input 
          className="input-field"
          type='text' 
          placeholder={props.placeholder}
          onChange={(event) => handleChange(event)}
        />
        <button
          className="add-button"
          onClick={addChip}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AdminPanelChipsInput;