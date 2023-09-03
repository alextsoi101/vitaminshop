import React from 'react';
import LoaderBar from '../MUI/LoaderBar';

const ShopCategoryLoader = () => {
  return (
    <div className="shopcategoryloader">
      <div className="loader-categoryname">
        <LoaderBar />
      </div>
      <div className="loader-categorydescription">
        <LoaderBar />
      </div>
    </div>
  )
}

export default ShopCategoryLoader;