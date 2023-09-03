import React from 'react';

const BenefitCard = (props) => {
  return (
    <div className="benefitcard">
      <div className="benefitcard-img">
        <img src={props.image} alt="benefitimg" />
      </div>
      <div className="benefitcard-text">
        <h3>{props.name}</h3>
        <div className="benefit-decription">{props.description}</div>
      </div>
    </div>
  )
}

export default BenefitCard;