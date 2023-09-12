import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCounter from './ProductCounter';
import ButtonLoader from '../loaders/ButtonLoader';
import checkicon from '../../assets/icons/check.svg';
import { setProductCount, setTotalPrice } from '../../store/productSlice';
import { addProductToCart, localAddProductToCart } from '../../store/cartSlice';
import { openSuccessSnackbar } from '../../store/modalSlice';
import { useSelector, useDispatch } from 'react-redux';

const ProductAdd = () => {

  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.user.isLogin);
  const userId = useSelector(state => state.user.userId);
  const product = useSelector(state => state.product.product);
  const price = useSelector(state => state.product.price);
  const totalPrice = useSelector(state => state.product.totalPrice);
  const selectedSize = useSelector(state => state.product.selectedSize);
  const productCount = useSelector(state => state.product.productCount);
  const productName = useSelector(state => state.product.productName);
  const instock = useSelector(state => state.product.instock);
  const isLoading = useSelector(state => state.user.isAddToCartLoading);
  const {id} = useParams();

  useEffect(() => {
    dispatch(setTotalPrice(productCount * price))
  }, [productCount, price])

  const increaseCount = () => {
    dispatch(setProductCount(productCount + 1))
  }

  const decreaseCount = () => {
    if (productCount > 1) {
      dispatch(setProductCount(productCount - 1))
    }
  }

  const addToCart = () => {
    if (!instock) return
    if (isLogin) {
      dispatch(addProductToCart({userId, productId: id, selectedSize, count: productCount}))
        .then(data => {
          if (data.type === 'cart/addProductToCart/fulfilled') {
            dispatch(openSuccessSnackbar('Prodduct added to cart!'))
          }
        })
    } else {
      dispatch(localAddProductToCart({product: product, productCount: productCount, size: selectedSize}))
      dispatch(openSuccessSnackbar('Prodduct added to cart!'))
    }
  }

  return (
    <div className="productadd">
      <div className="productadd-info">
        <div className="info-name-size-count">
          <span className="info-name">{productName}</span>
          :
          <span className="info-size">{selectedSize}</span>
          :
          <span className="info-count">{productCount}x</span>
        </div>
        <div className="info-totalprice">
          ${totalPrice}.00
        </div>
      </div>
      <div className="counter-add">
        <div className="counter">
          <ProductCounter 
            productCount={productCount}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
          <div className="divider"></div>
          <div className={instock ? "instock" : "instock-false"}>
            {instock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
        <button 
          className={instock ? "button-add" : "button-add-disabled"}
          onClick={addToCart}
        >
          { isLoading ? <ButtonLoader /> : 
            <div>Add To Cart <span className="divider">|</span> ${totalPrice}.00</div>
          }
        </button>
      </div>

      <div className="order-info">
        <div className="order-info-item">
          <img src={checkicon} alt="checkicon" />
          <span className="order-info-text">
            Free Shipping on order over <span className="span-100">$100</span>
          </span>
        </div>
        <div className="order-info-item">
          <img src={checkicon} alt="checkicon" />
          <span className="order-info-text">
            Same day shipping if ordered before 8 p.m.
          </span>
        </div>
        <div className="order-info-item">
          <img src={checkicon} alt="checkicon" />
          <span className="order-info-text">
            Support available 7 days a week
          </span>
        </div>
      </div>

    </div>
  )
}

export default ProductAdd;
