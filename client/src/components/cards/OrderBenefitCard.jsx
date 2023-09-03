import React from "react";

const OrderBenefitCard = (props) => {

  return (
    <div className="orderbenefitcard">
      <div className="image-wrapper">
        <img src={props.icon} alt="" />
      </div>
      <div className="maintext">
        {props.maintext}
      </div>
      <div className="description">
        {props.description}
      </div>
    </div>
  )
}

export default OrderBenefitCard;