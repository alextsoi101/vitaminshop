import React from "react";
import NewProduct from "../components/common/NewProduct";
import NewProductImages from "../components/common/NewProductImages";
import '../styles/pages/productnewpage.scss';

const ProductNewPage = () => {
  return (
    <div className="productnewpage">
      <div className="page-header">
        <h2>New product</h2>
      </div>
      <div className="page-main-content">
        <div className="newproduct-wrapper">
          <NewProduct />
        </div>
        <div className="newproductimages-wrapper">
          <NewProductImages />
        </div>
        <div className="newproductcreate-wrapper">
          <button className="create-product-button">
            Create product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductNewPage;