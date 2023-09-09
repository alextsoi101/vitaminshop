import React from 'react';
import { capitalise } from '../../utils/capitaliseFirstLetter';

const OrderItemCard = (props) => {
  return (
    <div className="orderitemcard">

      <div className="orderitem-image">
        <img src={props.image} alt='productimage' />
      </div>

      <div className="orderitem-info">
        <div className="orderitem-name">
          {capitalise(props.name)}
        </div>
        <div className="orderitem-count-price">
          <div className="orderitem-count">
            <span className="item-count">{props.count}x</span>
            <div className="orderitem-productprice">${props.price}.00</div>
          </div>
          <div className="orderitem-totalprice">
            ${props.totalPrice}.00
          </div>
        </div>
      </div>

    </div>
  )
}

export default OrderItemCard;