import React from 'react';
import ProductCardLoader from './ProductCardLoader';

const ShopGalleryLoader = (props) => {

  const limit = props.limit || 9
  let productLoadersArray = [];

  for (let i = 0; i < limit; i++) {
    productLoadersArray.push(<ProductCardLoader />)
  }

  return (
    <div className="shopgalleryloader">
      {
        productLoadersArray.map((loader) => loader)
      }
    </div>
  )
}

export default ShopGalleryLoader;