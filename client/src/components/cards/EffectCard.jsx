import React from 'react';

const EffectCard = (props) => {
  return (
    <div className="effectcard">
      <div className="card-image">
        <img src={props.image} alt="effects_icon" />
      </div>
      <div className="card-info">
        <div className="info-maintext">{props.maintext}</div>
        <div className="info-text">{props.text}</div>
      </div>
    </div>
  )
}

export default EffectCard;