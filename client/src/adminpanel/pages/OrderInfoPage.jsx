import React from "react";
import OrderItems from "../components/common/OrderItems";
import OrderTotal from "../components/common/OrderTotal";
import OrderUserInfo from "../components/common/OrderUserInfo";
import '../styles/pages/orderinfopage.scss';

const OrderInfoPage = () => {
  return (
    <div className="orderinfopage">
      <div className="page-header">
        <h2>Order info</h2>
      </div>
      <div className="page-main-content">
        <div className="order-content-wrapper">
          <div className="content-leftside-wrapper">
            <div>
              <OrderItems />
            </div>
            <div>
              <OrderTotal />
            </div>
          </div>
          <div className="content-rightside-wrapper">
            <OrderUserInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderInfoPage;