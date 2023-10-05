import React, { useState, useEffect } from "react";

const AdminPanelSelect = (props) => {

  const [selectValue, setSelectValue] = useState(null);

  useEffect(() => {
    if (props.selectedValueNumber) {
      setSelectValue(props.options[props.selectedValueNumber - 1].value)
      props.onChange(props.options[props.selectedValueNumber - 1].value)
    }
  }, [props.selectedValueNumber])

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
    props.onChange(e.target.value)
  }

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
          onChange={(event) => handleSelect(event)}
        >
          {
            props.options.map((option, index) => { 
              return props.selectedValueNumber - 1 === index ? 
                <option 
                  key={index} 
                  value={option.value}
                  selected
                >
                  {option.text}
                </option>
              : 
                <option 
                  key={index}
                  value={option.value}
                >
                  {option.text}
                </option>
            }
              
            )
          }
        </select>
      </div>
    </div>
  )
}

export default AdminPanelSelect;