import React from "react";

const OrderItemCard = (props) => {
  return (
    <div className="orderitemcard">
      <div className="orderitem-img-name">
        <div className="image-count-wrapper">
          <div className="image-wrapper">
            <img src={props.image} alt="product-image" />
          </div>
          <div className="count">
            {props.count}
          </div>
        </div>
        <div className="name-wrapper">
          {props.name}
        </div>
      </div>
      <div className="orderitem-price">
        ${props.price}.00
        <span>x{props.count}</span>
      </div>
      <div className="orderitem-total">
        ${props.total}.00
      </div>
    </div>
  )
}

export default OrderItemCard;