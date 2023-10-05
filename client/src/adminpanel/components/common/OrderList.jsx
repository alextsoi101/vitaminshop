import React from "react";
import OrderListCard from "../cards/OrderListCard";
import AdminPagination from "./AdminPagination";

const OrderList = (props) => {

  const handleIdInput = (e) => {
    props.setId(e.target.value)
  }

  const handleEmailInput = (e) => {
    props.setEmail(e.target.value)
  }

  const handleLimitSelect = (e) => {
    props.setLimit(e.target.value)
    props.changeLimit(e.target.value)
  }

  const handlePageChange = (value) => {
    props.setPage(value)
    props.changePage(value)
  }

  return (
    <div className="orderlist">
      <table className="orderlist-table">
        <thead className="table-header">
          <tr className="table-header-tr">
            <th className="table-header-th th-id">
              <div className="th-content">
                <div className="th-text">
                  Id
                </div>
                <input 
                  className="th-input input-id"
                  type='text'
                  placeholder='Id'
                  onChange={(e) => handleIdInput(e)}
                />
              </div>
            </th>
            <th className="table-header-th th-email">
              <div className="th-content">
                <div className="th-text">
                  Email
                </div>
                <input 
                  className="th-input input-email"
                  type='text'
                  placeholder='Email'
                  onChange={(e) => handleEmailInput(e)}
                />
              </div>
            </th>
            <th className="table-header-th th-created-at">
              <div className="th-content">
                <div className="th-text">
                  Created At
                </div>
              </div>
            </th>
            <th className="table-header-th th-total">
              <div className="th-content">
                <div className="th-text">
                  Total
                </div>
              </div>
            </th>
            <th className="table-header-th th-remove">
              <div className="th-content th-content-remove">
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.orders.rows.map(order => 
              <OrderListCard 
                key={order.id}
                id={order.id}
                email={order.email}
                createdAt={order.createdAt}
                total={order.total}
              />
            )
          }
        </tbody>
      </table>
      <div className="orderlist-pagination">
        <div className="pagination-results-per-page">
          Show
          <select 
            className="select-per-page"
            onChange={(e) => handleLimitSelect(e)}
          >
            <option value={10}>
              10
            </option>
            <option value={15}>
              15
            </option>
            <option value={20}>
              20
            </option>
          </select>
          per page
        </div>
        <div>
          <AdminPagination 
            pageCount={props.pageCount}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderList;