import React from "react";
import PromoListCard from "../cards/PromoListCard";
import Pagination from '@mui/material/Pagination';

const PromoList = () => {

  

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
          <PromoListCard 

          />
          <PromoListCard 

          />
          <PromoListCard 

          />
          <PromoListCard 

          />
        </tbody>
      </table>
      <div className="promolist-pagination">
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

export default PromoList;