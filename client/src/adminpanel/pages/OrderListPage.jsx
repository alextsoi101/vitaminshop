import React, { useState, useEffect } from "react";
import { calculatePageCount } from "../../utils/calculatePageCount";
import OrderList from "../components/common/OrderList";
import { useSelector, useDispatch } from "react-redux";
import { loadOrders } from "../../store/adminSlice";
import '../styles/pages/orderlistpage.scss';

const OrderListPage = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.admin.orders);

  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(null);
  
  useEffect(() => {
    dispatch(loadOrders({
      id: id,
      email: email,
      limit: limit,
      page: page
    }))
  }, [])

  useEffect(() => {
    if (orders) {
      setPageCount(calculatePageCount(orders.count, limit))
    }
  }, [orders])

  const changeLimit = (newLimit) => {
    dispatch(loadOrders({
      id: id,
      email: email,
      limit: newLimit,
      page: 1
    }))
  }

  const changePage = (newPage) => {
    dispatch(loadOrders({
      id: id,
      email: email,
      limit: limit,
      page: newPage
    }))
  }

  const handleApply = () => {
    dispatch(loadOrders({
      id: id,
      email: email,
      limit: limit,
      page: 1
    }))
  }

  return (
    <div className="orderlistpage">
      <div className="page-header">
        <h2>Orders</h2>
        <div className="header-button-section">
          <button 
            className="apply-button"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="order-list-wrapper">
          {
            orders &&
            <OrderList
              orders={orders}
              setId={setId}
              setEmail={setEmail}
              setPage={setPage}
              setLimit={setLimit}
              pageCount={pageCount}
              changeLimit={changeLimit}
              changePage={changePage}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default OrderListPage;