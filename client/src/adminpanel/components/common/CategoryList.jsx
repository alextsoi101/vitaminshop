import React from "react";
import CategoryListCard from "../cards/CategoryListCard";
import Pagination from '@mui/material/Pagination';

const CategoryList = () => {

  return (
    <div className="categorylist">
      <table className="categorylist-table">
        <thead className="table-header">
          <tr className="table-header-tr">
            <th className="table-header-th th-id">
              <div className="th-content">
                <div className="th-text">
                  Id
                </div>
              </div>
            </th>
            <th className="table-header-th th-categoryname">
              <div className="th-content">
                <div className="th-text">
                  Category
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <CategoryListCard 

          />
          <CategoryListCard 

          />
          <CategoryListCard 

          />
          <CategoryListCard 

          />
        </tbody>
      </table>
      <div className="categorylist-pagination">
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

export default CategoryList;