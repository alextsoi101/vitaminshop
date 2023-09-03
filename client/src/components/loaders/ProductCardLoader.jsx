import React from 'react';
import LoaderBar from '../MUI/LoaderBar';

const ProductCardLoader = () => {
  return (
    <div className="productcardloader">
      <div className="loader-image">
        <LoaderBar />
      </div>
      <div className="loader-main-info-item">
        <LoaderBar />
      </div>
      <div className="loader-main-info-item">
        <LoaderBar />
      </div>
      <div className="loader-main-info-item">
        <LoaderBar />
      </div>
      <div className="loader-button">
        <LoaderBar />
      </div>

    </div>
  )
}

export default ProductCardLoader;