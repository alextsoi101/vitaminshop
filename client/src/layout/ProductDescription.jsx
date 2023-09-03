import React from 'react';
import { useSelector } from 'react-redux';

const ProductDescription = () => {

  const description = useSelector(state => state.product.description);

  return (
    <div className="productdescription">
      {description}
    </div>
  )
}

export default ProductDescription;
