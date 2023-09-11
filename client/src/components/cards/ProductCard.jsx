import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutOfStock from '../UI/OutOfStock';
import star from '../../assets/icons/star.svg';
import ButtonLoader from '../loaders/ButtonLoader';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../store/cartSlice';
import { localAddProductToCart } from '../../store/cartSlice';
import { openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const ProductCard = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector(state => state.user.isLogin);
  const userId = useSelector(state => state.user.userId);
  const isLoading = useSelector(state => state.user.isAddToCartLoading);
  const productId = props.productId;
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectSizeError, setSelectSizeError] = useState(null);

  const handleAddProduct = () => {
    if (isLoading) return
    if (!props.instock) return
    if (!selectedSize) {
      setSelectSizeError('error')
      dispatch(openErrorSnackbar('Select product size'))
      return
    }
    if (isLogin) {
      dispatch(addProductToCart({userId, productId, selectedSize, count: 1}))
        .then(data => {
          if (data.type === 'cart/addProductToCart/fulfilled') {
            dispatch(openSuccessSnackbar('Prodduct added to cart!'))
          }
        })
    } else {
      dispatch(localAddProductToCart({product: props.product, productCount: 1, size: selectedSize}))
      dispatch(openSuccessSnackbar('Prodduct added to cart!'))
    }
  }

  const goToProductPage = () => {
    navigate('/product/' + props.productId)
  }

  const selectSize = (size) => {
    setSelectSizeError(null)

    if (size === selectedSize) {
      if (!props.instock) return
      setSelectedSize(null)
    } else {
      setSelectedSize(size)
    }
  }

  return (
    <div className="productcard">
      <div 
        className={props.instock ? "productcard-img" : "outofstock-productcard-img"}
        onClick={goToProductPage}
      >
        {props.instock ? "" : <OutOfStock />}
        <img src={props.productimage} alt="productimage" />
      </div>

      <div className="productcard-info">
        <div className="text-vitamins">VITAMINS</div>

        <div 
          className="product-name"
          onClick={goToProductPage}
        >
          {capitalise(props.name)}
        </div>

        <div className="product-rating">
          <img src={star} alt="staricon" />
          {props.rating}/5
          <span className="divider">|</span>
          {props.reviewCount}
          <span className="span-reviews">Reviews</span>
        </div>

        <div className="product-categories">
          {props.categories.map(category =>
            <div 
              key={category.id}
              className="product-category" 
            >
              {capitalise(category.name)}
            </div>
          )}
        </div>

        <div className="product-price">
          ${props.price}.00
        </div>

        <div className="product-sizes">
          {props.sizes.map((size, index) =>
            <button 
              key={index}
              className={props.instock ? "product-size" : "disabled-product-size"}
              onClick={() => selectSize(size)}
              style={ selectSizeError 
                ? {borderColor: '#EB2606'}
                : {borderColor: size === selectedSize ? '#17AF26' : '#D6D6D6'}
              }
            >
              {size}
            </button>
          )}
        </div>

        <button 
          className={props.instock ? "product-btn" : "disabled-product-btn"}
          onClick={handleAddProduct}
        >
          {isLoading ? <ButtonLoader /> : <div>Add to Cart</div>}
        </button>
      </div>
    </div>
  )
}

export default ProductCard;