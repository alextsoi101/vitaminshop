import React from "react";
import CategoryListCard from "../cards/CategoryListCard";
import AdminPagination from "./AdminPagination";

const CategoryList = (props) => {

  const handleLimitSelect = (e) => {
    props.setLimit(e.target.value)
    props.changeLimit(e.target.value)
  }

  const handlePageChange = (value) => {
    props.setPage(value)
    props.changePage(value)
  }

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
          {
            props.categories.rows.map(category => 
              <CategoryListCard 
                key={category.id}
                id={category.id}
                name={category.name}
              />
            )
          }
        </tbody>
      </table>
      <div className="categorylist-pagination">
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

export default CategoryList;