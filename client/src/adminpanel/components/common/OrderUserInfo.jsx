import React from "react";

const OrderUserInfo = () => {

  return (
    <div className="orderuserinfo">
      <div className="orderuserinfo-header">
        User <span>#1101</span>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Full Name
        </div>
        <div className="item-value">
          Alex Tsoi
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Contact Info
        </div>
        <div className="item-value">
          <div>alex@gmail.com</div>
          <div>2620010101</div>
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Shipping Address
        </div>
        <div className="item-value">
          <div>
            New York
          </div>
          <div>
            01001 New York
          </div>
          <div>
            NY, United States
          </div>
          <div>
            2620010101
          </div>
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Order notes
        </div>
        <div className="item-value">
          aaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaa aaa a a aaaaaaaaaa
        </div>
      </div>
    </div>
  )
}

export default OrderUserInfo;