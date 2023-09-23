import React from "react";
import EditProduct from "../components/common/EditProduct";
import EditProductImages from "../components/common/EditProductImages";
import '../styles/pages/producteditpage.scss';

const ProductEditPage = () => {
  return (
    <div className="producteditpage">
      <div className="page-header">
        <h2>Edit product</h2>
      </div>
      <div className="page-main-content">
        <div className="editproduct-wrapper">
          <EditProduct />
        </div>
        <div className="editproductimages-wrapper">
          <EditProductImages
            images={[
              'https://images.freeimages.com/images/large-previews/ddf/tour-d-eiffel-1447025.jpg',
              'https://images.freeimages.com/variants/SkMTfcrh26vM2Lz6rysKkD2H/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
            ]}
          />
        </div>
        <div className="editproduct-wrapper">
          <button className="edit-product-button">
            Edit product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductEditPage;