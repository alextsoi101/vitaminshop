import React from "react";

const OrderTotal = (props) => {
  return (
    <div className="ordertotal">
      <div className="ordertotal-header">
        Order Total
      </div>
      <div className="order-summary">
        <div className="summary-item">
          <div>Shipping</div>
          <div>${props.shippingCost}.00</div>
        </div>
        <div className="summary-item">
          <div>Total</div>
          <div>${props.total}.00</div>
        </div>
      </div>
      <div className="paid-by-user">
        <div>Paid by user</div>
        <div>${props.total}.00</div>
      </div>
    </div>
  )
}

export default OrderTotal;