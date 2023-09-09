import React from 'react';

const EffectCard = (props) => {
  let effects;
  let effectsText;
  if (typeof props.text === 'object') {
    effects = Object.values(props.text);
    effectsText = effects.join(', ');
  } else {
    effectsText = props.text;
  }

  return (
    <div className="effectcard">
      <div className="card-image">
        <img src={props.image} alt="effects_icon" />
      </div>
      <div className="card-info">
        <div className="info-maintext">{props.maintext}</div>
        <div className="info-text">{effectsText}</div>
      </div>
    </div>
  )
}

export default EffectCard;