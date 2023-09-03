import React from 'react';

const AccountOrderCard = (props) => {

  const date = new Date(props.date);
  const reviewDate = date.toLocaleDateString('en-US')

  return (
    <div className="accountordercard">
      <div className="order-id">
        #<span>{props.id}</span>
      </div>
      <div className="order-info">
        <div className="order-date">
          Date: <span>{reviewDate}</span>
        </div>
        <div className="order-total">
          <div className="total-text-wrapper">
            TOTAL: <span>${props.total}.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountOrderCard;