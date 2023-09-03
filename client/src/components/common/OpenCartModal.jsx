import React, { useState } from 'react';
import CartModal from "../modal/CartModal";
import carticon from '../../assets/icons/cart-green-light.svg';
import { useSelector } from 'react-redux';

const OpenCartModal = () => {

  const cartSubTotal = useSelector(state => state.cart.subTotal);
  const cartProductsCount = useSelector(state => state.cart.count);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <div className="opencartmodal-wrapper">
      <button
        className="opencartmodal"
        onClick={openCart}
      >
        <div className="cart-subtotal">
          ${cartSubTotal}.00
        </div>
        <div className="cart-img-container">
          <img src={carticon} alt="carticon" />
          <div className="cartitemcount">
            {cartProductsCount}
          </div>
        </div>
      </button>

      <CartModal 
        closeCart={closeCart}
        isCartOpen={isCartOpen}
      />
    </div>
  )
}

export default OpenCartModal;
