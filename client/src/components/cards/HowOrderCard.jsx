import React from 'react';

const HowOrderCard = (props) => {
  return (
    <div className="howordercard">
      <div className="stepnumber">{props.stepnumber}</div>
      <img src={props.image} alt="" />
      <h3>{props.maintext}</h3>
      <div className="card-description">{props.description}</div>
    </div>
  )
}

export default HowOrderCard;
