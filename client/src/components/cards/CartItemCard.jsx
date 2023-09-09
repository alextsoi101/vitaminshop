import React from 'react';
import ProductCounter from '../common/ProductCounter';
import closegreyicon from '../../assets/icons/close-grey.svg';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector, useDispatch } from 'react-redux';
import { 
  changeCartProductCount, 
  removeCartProduct, 
  localChangeCartProductCount,
  localRemoveCartProduct } from '../../store/cartSlice';

const CartItemCard = (props) => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const userId = useSelector(state => state.user.userId);

  const increaseCount = () => {
    const newCount = props.count + 1;
    if (isLogin) {
      dispatch(changeCartProductCount({userId, cartProductId: props.cartProductId, newCount}))
    } else {
      dispatch(localChangeCartProductCount({cartProductId: props.cartProductId, newCount}))
    }
  }

  const decreaseCount = () => {
    if (props.count > 1 ) {
      const newCount = props.count - 1;
      if (isLogin) {
        dispatch(changeCartProductCount({userId, cartProductId: props.cartProductId, newCount}))
      } else {
        dispatch(localChangeCartProductCount({cartProductId: props.cartProductId, newCount}))
      }
    }
  }

  const removeProduct = () => {
    if (isLogin) {
      dispatch(removeCartProduct({cartProductId: props.cartProductId, userId: userId}))
    } else {
      dispatch(localRemoveCartProduct(props.cartProductId))
    }
  }

  return (
    <div className="cartitemcard">

      <div className="cartitem-image">
        <img src={props.image} alt='productimage' />
      </div>

      <div className="cartitem-info">
        <div className="cartitem-name-size">
          <div className="cartitem-name">{capitalise(props.name)}</div>
          <div className="cartitem-size">
            {props.size}
          </div>
        </div>
        <div className="cartitem-info-other">
          <div className="cartitem-counter-price">
            <div className="cartitem-counter">
              <ProductCounter 
                productCount={props.count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
              <div className="cartitem-productprice">${props.price}.00</div>
            </div>
            <div className="cartitem-totalprice">
              ${props.totalPrice}.00
            </div>
          </div>
        </div>
      </div>

      <button 
        className="delete-btn"
        onClick={removeProduct}
      >
        <img src={closegreyicon} alt="deleteproducticon" />
      </button>

    </div>
  )
}

export default CartItemCard;