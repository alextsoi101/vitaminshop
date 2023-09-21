import React from "react";
import ProductListCard from "../cards/ProductListCard";
import Pagination from '@mui/material/Pagination';

const ProductList = () => {

  

  return (
    <div className="productlist">
      <table className="productlist-table">
        <thead className="table-header">
          <tr className="table-header-tr">
            <th className="table-header-th th-id">
              <div className="th-content">
                <div className="th-text">
                  Id
                </div>
              </div>
            </th>
            <th className="table-header-th th-image">
              <div className="th-content">
              </div>
            </th>
            <th className="table-header-th th-productname">
              <div className="th-content">
                <div className="th-text">
                  Product Name
                </div>
                <input 
                  className="th-input input-product-name"
                  type='text'
                  placeholder='Product Name'
                />
              </div>
            </th>
            <th className="table-header-th th-price">
              <div className="th-content">
                <div className="th-text">
                  Price
                </div>
                <div className="th-input-group">
                  <input 
                    className="th-input input-price"
                    type="text"
                    placeholder="Min"
                  />
                  <input 
                    className="th-input input-price"
                    type="text"
                    placeholder="Max"
                  />
                </div>
              </div>
            </th>
            <th className="table-header-th th-category">
              <div className="th-content">
                <div className="th-text">
                  Category
                </div>
                <select className="th-select">
                  <option>
                    All
                  </option>
                  <option>
                    For men
                  </option>
                  <option>
                    For kids
                  </option>
                  <option>
                    Multivitamin
                  </option>
                  <option>
                    Vitamin A
                  </option>
                  <option>
                    Vitamin B
                  </option>
                  <option>
                    Vitamin C
                  </option>
                  <option>
                    Vitamin D
                  </option>
                  <option>
                    Omega
                  </option>
                </select>
              </div>
            </th>
            <th className="table-header-th th-status">
              <div className="th-content">
                <div className="th-text">
                  Status
                </div>
                <select className="th-select">
                  <option>
                    All
                  </option>
                  <option>
                    In stock
                  </option>
                  <option>
                    Out of stock
                  </option>
                </select>
              </div>
            </th>
            <th className="table-header-th th-remove">
              <div className="th-content th-content-remove">
                <div className="th-text th-text-remove">
                  
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductListCard 

          />
          <ProductListCard 

          />
          <ProductListCard 

          />
          <ProductListCard 

          />
        </tbody>
      </table>
      <div className="productlist-pagination">
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

export default ProductList;