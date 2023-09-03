import React from 'react';
import previcon from '../../assets/icons/arrowleft.svg';


const ArrowPrevious = (props) => {
  return (
    <button
      className="prevnext-btn"
      onClick={props.onClick}
    >
      <img src={previcon} alt="" />
    </button>
  )
}

export default ArrowPrevious;