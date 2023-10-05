import React, { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

const AdminPanelSelectMany = (props) => {

  const [chips, setChips] = useState([]);
  const [chipsUI, setChipsUI] = useState([]);

  const optionsString = JSON.stringify(props.selectedOptions);
  useEffect(() => {
    if (props.selectedOptions) {
      setChips(props.selectedOptions.values)
      setChipsUI(props.selectedOptions.text)
      props.onChange(props.selectedOptions.values)
    }
  }, [optionsString])

  const addChip = (e) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index]
    const chipText =  optionElement.getAttribute('chipText');
    const chipValue = e.target.value

    if (chips.includes(chipText)) return
    setChipsUI([...chipsUI, chipText])
    setChips([...chips, chipValue])
    props.onChange([...chips, chipValue])
  }

  const removeChip = (chip) => {
    const indexToRemove = chipsUI.findIndex(item => item === chip);
  
    if (indexToRemove !== -1) {
      const newChipsUI = [...chipsUI.slice(0, indexToRemove), ...chipsUI.slice(indexToRemove + 1)];
      const newChips = [...chips.slice(0, indexToRemove), ...chips.slice(indexToRemove + 1)];
  
      setChipsUI(newChipsUI);
      setChips(newChips);

      props.onChange(newChips);
    }
  }

  return (
    <div className="adminpanelselectmany">
      <div className="adminpanelinput-label">
        {props.label}
      </div>
      <div className="chips-container">
        {
          chipsUI.map((chip, index) => 
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
                value={option.value}
                chipText={option.text}
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