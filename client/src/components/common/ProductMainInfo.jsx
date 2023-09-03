import React from 'react';
import staricon from '../../assets/icons/star.svg';
import { useSelector } from 'react-redux';

const ProductMainInfo = () => {

  const productName = useSelector(state => state.product.productName);
  const categories = useSelector(state => state.product.categories);
  const price = useSelector(state => state.product.price);
  const rating = useSelector(state => state.product.rating);
  const reviewsCount = useSelector(state => state.product.reviewsCount);

  return (
    <div className="productmaininfo">
      <div className="text-vitamins">VITAMINS</div>
      <h2>{productName}</h2>
      <div className="product-categories">
        {
          categories.map(category =>
            <div key={category.id} className="product-category">{category.name}</div>
          )
        }
      </div>
      <div className="product-price-rating">
        <div className="product-price">${price}.00</div>
        <div className="product-rating">
          <img src={staricon} alt="staricon" />
          <span className="rate">{rating}/5</span>
          <span className="divider">|</span> 
          <span className="reviews-count">{reviewsCount}</span>
          <span className="text-reviews">Reviews</span> 
        </div>
      </div>
    </div>
  )
}

export default ProductMainInfo;