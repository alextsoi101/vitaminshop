import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSize } from '../../store/productSlice';

const ProductSizes = () => {

  const dispatch = useDispatch();
  const sizes = useSelector(state => state.product.sizes);
  const selectedSize = useSelector(state => state.product.selectedSize);

  const selectSize = (size) => {
    dispatch(setSelectedSize(size))
  }

  return (
    <div className="productsizes">
      <div className="maintext">SIZE</div>
      <div className="size-buttons">
        {
          sizes.map((size, index) => 
            <button
              key={index}
              onClick={() => selectSize(size)}
              style={{border: size === selectedSize ? '1px solid #17AF26' : '1px solid #F4F4F4'}}
            >
              {size}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default ProductSizes;