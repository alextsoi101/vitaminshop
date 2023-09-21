import React from "react";
import ProductList from "../components/common/ProductList";

import '../styles/pages/productlistpage.scss';

const ProductListPage = () => {
  return (
    <div className="productlistpage">
      <div className="page-header">
        <h2>Products</h2>
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