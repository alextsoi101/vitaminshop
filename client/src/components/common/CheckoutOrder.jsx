import React, { useEffect } from 'react';
import FreeShipping from './FreeShipping';
import PaymentMethods from './PaymentMethods';
import ApplyPromo from '../forms/ApplyPromo';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDiscount, setTotal } from '../../store/cartSlice';

const CheckoutOrder = () => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const subTotal = useSelector(state => state.cart.subTotal);
  const total = useSelector(state => state.cart.total);
  const percentDiscount = useSelector(state => state.promo.percentDiscount);
  const discount = useSelector(state => state.cart.discount);
  const isShippingFree = useSelector(state => state.cart.isShippingFree);

  useEffect(() => {
    const newDiscount = Math.floor(subTotal * (percentDiscount / 100));
    const newTotal = subTotal - newDiscount;
    dispatch(setDiscount(newDiscount))
    dispatch(setTotal(newTotal))
  }, [percentDiscount, subTotal])

  return (
    <div className="checkoutcard">

      <ul className="checkoutcard-items">
        <li className="checkoutcard-item">
          <div className="item-name">Subtotal</div>
          <div className="item-value">${subTotal}.00</div>
        </li>
        <li className="checkoutcard-item">
          <div className="item-name">Shipping cost</div>
          <div className="item-value">${isShippingFree ? '0' : '50'}.00</div>
        </li>
        <li className="checkoutcard-item">
          <div className="item-name">Coupon</div>
          <div className="item-value">-${discount}.00</div>
        </li>
        <li className="checkoutcard-item">
          <div className="item-name">Total</div>
          <div className="item-value">
            {discount > 0 ? <span className="oldtotalprice">${total + discount}.00</span> : ''}
            <span className="totalprice">${isShippingFree ? total : total + 50}.00</span>
          </div>
        </li>
      </ul>

      <ApplyPromo />

      <hr />

      <FreeShipping />

      { cartProducts.length > 0 ?
        <Link to='/checkout' className="link-to">
          <button 
            className="checkout-btn"
          >
            Checkout<span>|</span>${isLogin ? total : subTotal}.00
          </button>
        </Link>
        :
        <button 
          className="btn-disabled"
        >
          Checkout<span>|</span>${isLogin ? total : subTotal}.00
        </button>
      }
      
      <hr />

      <div className="payment-info">
        <div className="payment-info-text">
          SECURE PAYMENTS PROVIDED BY
        </div>
        <div className="payment-info-methods">
          <PaymentMethods />
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrder;