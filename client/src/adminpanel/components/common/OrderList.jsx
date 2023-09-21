import React from "react";
import OrderListCard from "../cards/OrderListCard";
import Pagination from '@mui/material/Pagination';

const OrderList = () => {

  

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
          <OrderListCard 

          />
          <OrderListCard 

          />
          <OrderListCard 

          />
          <OrderListCard 

          />
        </tbody>
      </table>
      <div className="orderlist-pagination">
        <div className="pagination-results-per-page">
          Show
          <select className="select-per-page">
            <option>
              10
            </option>
            <option>
              15
            </option>
            <option>
              20
            </option>
          </select>
          per page
        </div>
        <div>
          <Pagination 
            size="medium"
            count={10} 
            shape="rounded"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  )
}

export default OrderList;