import React from 'react';
import ProductRating from '../MUI/ProductRating';
import { capitalise } from '../../utils/capitaliseFirstLetter';

const ProductReviewCard = (props) => {

  const date = new Date(props.createdAt);
  const formatOptions = {year: 'numeric', month: 'long', day: 'numeric' };
  const reviewDate = date.toLocaleDateString('en-US', formatOptions);

  return (
    <div className="productreviewcard">
      <div className="user-info">
        <img src={props.image} alt="userphoto" />
        <span className="user-name">{capitalise(props.name)}</span>
        <span className="divider">|</span>
        <span className="review-date">{reviewDate}</span>
      </div>
      <div className="horizontal-divider"></div>
      <div className="review-info">
        <div className="rate">
          <ProductRating 
            value={props.rate}
          />
        </div>
        <div className="review-text">
          {capitalise(props.reviewText)}
        </div>
      </div>
    </div>
  )
}
  
export default ProductReviewCard;