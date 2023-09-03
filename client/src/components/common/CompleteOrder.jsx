import React from 'react';
import OrderItemCard from '../cards/OrderItemCard';
import iconcheckgreen from '../../assets/icons/check-circle-green.svg';
import { useSelector } from 'react-redux';

const CompleteOrder = (props) => {

  const orderedProducts = useSelector(state => state.order.orderedProducts);

  return (
    <div className="completeorder">
      <div className="completeorder-header">
        <div className="maintext">Your Order</div>
        <div className="completeorder-text-paid">
          <img src={iconcheckgreen} alt='checkicon' />
          <span>Paid</span>
        </div>
      </div>
      <div className="completeorder-cards">
        {
          orderedProducts.map(orderedProduct => 
            <OrderItemCard 
              key={orderedProduct.id}
              image={orderedProduct.product.images[0]}
              name={orderedProduct.product.name}
              count={orderedProduct.count}
              price={orderedProduct.product.price}
              totalPrice={orderedProduct.totalPrice}
            />
          )
        }
      </div>
    </div>
  )
}

export default CompleteOrder;