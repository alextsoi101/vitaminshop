import React from "react";
import ProductList from "../components/common/ProductList";
import '../styles/pages/productlistpage.scss';

const ProductListPage = () => {
  return (
    <div className="productlistpage">
      <div className="page-header">
        <h2>Products</h2>
        <div className="header-button-section">
          <button className="apply-button">
            Apply
          </button>
          <button className="newproduct-button">
            New Product
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="product-list-wrapper">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default ProductListPage;