import React from 'react';
import closegreyicon from '../../assets/icons/close-grey.svg';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector, useDispatch } from 'react-redux';
import {removeCartProduct, localRemoveCartProduct } from '../../store/cartSlice';

const CartModalItemCard = (props) => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const userId = useSelector(state => state.user.userId);

  const removeProduct = () => {
    if (isLogin) {
      dispatch(removeCartProduct({cartProductId: props.cartProductId, userId: userId}))
    } else {
      dispatch(localRemoveCartProduct(props.cartProductId))
    }
  }

  return (
    <div className="cartmodalitemcard">

      <div className="cartmodalitem-image">
        <img src={props.image} alt='productimage' />
      </div>

      <div className="cartmodalitem-info">
        <div className="cartmodalitem-name-deletebtn">
          <div className="item-name-size">
            <span className="item-name">{capitalise(props.name)}</span>
            <span className="item-size">{props.size}</span>
          </div>
          <button 
            className="delete-btn"
            onClick={removeProduct}
          >
            <img src={closegreyicon} alt="deleteproducticon" />
          </button>
        </div>

        <div className="cartmodalitem-count-price">
          <div className="cartmodalitem-count">
            <span className="item-count">{props.count}x</span>
            <div className="cartmodalitem-productprice">${props.price}.00</div>
          </div>
          <div className="cartmodalitem-totalprice">
            ${props.totalPrice}.00
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartModalItemCard;