import React from 'react';
import { useSelector } from 'react-redux';

const ProductShortDescription = () => {

  const shortDescription = useSelector(state => state.product.shortDescription);

  return (
    <div className="shortdescription">
      <div className="maintext">DESCRIPTION</div>
      <div className="description">{shortDescription}</div>
    </div>
  )
}

export default ProductShortDescription;