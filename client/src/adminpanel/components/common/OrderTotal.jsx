import React from "react";

const OrderTotal = () => {

  return (
    <div className="ordertotal">
      <div className="ordertotal-header">
        Order Total
      </div>
      <div className="order-summary">
        <div className="summary-item">
          <div>Subtotal</div>
          <div>$1850.00</div>
        </div>
        <div className="summary-item">
          <div>Shipping</div>
          <div>$50.00</div>
        </div>
        <div className="summary-item">
          <div>Discount</div>
          <div>$0.00</div>
        </div>
        <div className="summary-item">
          <div>Total</div>
          <div>$1900.00</div>
        </div>
      </div>
      <div className="paid-by-user">
        <div>Paid by user</div>
        <div>$1900.00</div>
      </div>
    </div>
  )
}

export default OrderTotal;