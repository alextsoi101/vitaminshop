import React from 'react';

const AdvantageCard = (props) => {
  return (
    <div className="advantagecard">
      <img src={props.image} alt="advantage-image" />
      <h3>{props.maintext}</h3>
      <div className="advantage-description">{props.description}</div>
    </div>
  )
}

export default AdvantageCard;