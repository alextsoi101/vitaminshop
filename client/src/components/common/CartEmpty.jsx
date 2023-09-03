import React from 'react';
import {Link} from 'react-router-dom';
import carticon from '../../assets/icons/cart-green.svg';

const CartEmpty = (props) => {
  return (
    <div className="cartempty">
      <div className="cartempty-img">
        <img src={carticon} alt="carticon" />
      </div>

      <div className="cartempty-text">No products in the cart.</div>

      <Link to='/shop' className="link-to">
        <button 
          className="cartempty-button"
          onClick={props.closeCart}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  )
}

export default CartEmpty;