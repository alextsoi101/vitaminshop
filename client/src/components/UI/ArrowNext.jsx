import React from 'react';
import nexticon from '../../assets/icons/arrowright.svg';

const ArrowNext = (props) => {
  return (
    <button 
      className="prevnext-btn"
      onClick={props.onClick}
    >
      <img src={nexticon} alt="" />
    </button>
  )
}

export default ArrowNext;