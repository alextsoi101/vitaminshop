import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { capitalise } from '../../utils/capitaliseFirstLetter';

const OrderedProductCard = (props) => {
  return (
    <div className="orderedproductcard">

      <div className="product-image">
        <img src={props.image} alt='productimage' />
      </div>

      <div className="product-info">
        <div className="prdouct-name-size">
          <div className="product-name">
            {capitalise(props.name)}
          </div>
          <div className="product-size">
            {props.size}
          </div>
        </div>
        <div className="product-count-price-totalprice">
          <div className="product-count-price">
            <div className="product-count">
              x{props.count}
            </div>
            <div className="product-price">
              ${props.price}.00
            </div>
          </div>
          <div className="product-totalprice">
            ${props.totalPrice}.00
          </div>
        </div>
      </div>

      <div className="complete-icon">
        <CheckCircleIcon
          sx={{color: "#17AF26", fontSize: "20px"}}
        />
      </div>

    </div>
  )
}

export default OrderedProductCard;