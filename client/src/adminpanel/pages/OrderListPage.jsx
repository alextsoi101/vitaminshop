import React from "react";
import OrderList from "../components/common/OrderList";
import '../styles/pages/orderlistpage.scss';

const OrderListPage = () => {
  return (
    <div className="orderlistpage">
      <div className="page-header">
        <h2>Orders</h2>
        <div className="header-button-section">
          <button className="apply-button">
            Apply
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="order-list-wrapper">
          <OrderList />
        </div>
      </div>
    </div>
  )
}

export default OrderListPage;