import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import ProductReviews from '../components/common/ProductReviews';
import { useSelector } from 'react-redux';

const ProductInfoReviews = () => {

  const reviewsCount = useSelector(state => state.product.reviewsCount);

  const [displayItem, setDisplayItem] = useState('description')

  const showDescription = () => {
    setDisplayItem('description')
  }

  const showReviews = () => {
    setDisplayItem('reviews')
  }

  return (
    <div className="productinforeviews">
      <div className="buttons">
        <button 
          className={displayItem === 'description' ? "btn-active" : "btn-default"}
          onClick={showDescription}
        >
          Description
        </button>
        <button 
          className={displayItem === 'reviews' ? "btn-active" : "btn-default"}
          onClick={showReviews}
        >
          Reviews<span>({reviewsCount})</span>
        </button>
      </div>

      <div className="description-reviews-container">

        { displayItem === 'description' && 
          <ProductDescription />
        }

        { displayItem === 'reviews' && 
          <ProductReviews />
        }

      </div>

    </div>
  )
}

export default ProductInfoReviews;