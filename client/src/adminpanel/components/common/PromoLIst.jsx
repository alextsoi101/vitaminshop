import React from "react";
import PromoListCard from "../cards/PromoListCard";
import AdminPagination from "./AdminPagination";

const PromoList = (props) => {

  const handleLimitSelect = (e) => {
    props.setLimit(e.target.value)
    props.changeLimit(e.target.value)
  }

  const handlePageChange = (value) => {
    props.setPage(value)
    props.changePage(value)
  }

  return (
    <div className="promolist">
      <table className="promolist-table">
        <thead className="table-header">
          <tr className="table-header-tr">
            <th className="table-header-th th-id">
              <div className="th-content">
                <div className="th-text">
                  Id
                </div>
              </div>
            </th>
            <th className="table-header-th th-promocode">
              <div className="th-content">
                <div className="th-text">
                  Promocode
                </div>
              </div>
            </th>
            <th className="table-header-th th-discount">
              <div className="th-content">
                <div className="th-text">
                  Percent Discount
                </div>
              </div>
            </th>
            <th className="table-header-th th-expiration">
              <div className="th-content">
                <div className="th-text">
                  Expiration Date
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
            props.promocodes.rows.map(promocode => 
              <PromoListCard 
                key={promocode.id}
                id={promocode.id}
                promocode={promocode.promocode}
                percentDiscount={promocode.percentDiscount}
                expirationDate={promocode.expirationDate}
              />
            )
          }
        </tbody>
      </table>
      <div className="promolist-pagination">
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

export default PromoList;