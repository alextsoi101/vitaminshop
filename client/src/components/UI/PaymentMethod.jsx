import React from 'react';

const PaymentMethod = (props) => {
  return (
    <div className="paymentmethod">
      <img src={props.image} alt="paymentmethod" />
    </div>
  )
}

export default PaymentMethod;