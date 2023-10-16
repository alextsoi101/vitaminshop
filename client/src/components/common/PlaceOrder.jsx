import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentMethods from './PaymentMethods';
import ButtonLoader from '../loaders/ButtonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder, placeOrderNoAuth, setPlaceOrderError } from '../../store/orderSlice';
import { setDiscount, setTotal } from '../../store/cartSlice';
import { openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const PlaceOrder = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const userId = useSelector(state => state.user.userId);
  const email = useSelector(state => state.order.email);
  const firstName = useSelector(state => state.order.firstName);
  const lastName = useSelector(state => state.order.lastName);
  const country = useSelector(state => state.order.country);
  const addressLineOne = useSelector(state => state.order.addressLineOne);
  const addressLineTwo = useSelector(state => state.order.addressLineTwo);
  const city = useSelector(state => state.order.city);
  const state = useSelector(state => state.order.state);
  const zip = useSelector(state => state.order.zip);
  const phone = useSelector(state => state.order.phone);
  const notes = useSelector(state => state.order.notes);
  const total = useSelector(state => state.cart.total);
  const shippingCost = useSelector(state => state.cart.shippingCost);
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const subTotal = useSelector(state => state.cart.subTotal);
  const percentDiscount = useSelector(state => state.promo.percentDiscount);
  const discount = useSelector(state => state.cart.discount);
  const placeOrderError = useSelector(state => state.order.placeOrderError);
  const isPlaceOrderLoading = useSelector(state => state.order.isPlaceOrderLoading);

  useEffect(() => {
    const newDiscount = Math.floor(subTotal * (percentDiscount / 100));
    const newTotal = subTotal + shippingCost - newDiscount;
    dispatch(setDiscount(newDiscount))
    dispatch(setTotal(newTotal))
  }, [percentDiscount, subTotal])

  const [isConfirmed, setIsConfirmed] = useState(false);

  const clickConfirm = () => {
    setIsConfirmed(!isConfirmed)
  }

  const clickPlaceOrder = () => {
    if (!isConfirmed) return

    if (!email || !firstName || !lastName || !country || !firstName || !addressLineOne || !city || !state || !zip ) {
      dispatch(setPlaceOrderError('Fill all required fields'));
      dispatch(openErrorSnackbar('Fill all required fields'))
    }

    if (isLogin) {
      dispatch(placeOrder({
        userId,
        email, 
        firstName, 
        lastName, 
        country, 
        addressLineOne, 
        addressLineTwo, 
        city,
        state,
        zip,
        phone,
        notes,
        shippingCost,
        total
      }))
      .then(data => {
        if (data.type === 'order/placeOrder/fulfilled') {
          dispatch(openSuccessSnackbar('Order placed succesfully!'))
          dispatch(setPlaceOrderError('')) 
          navigate('/ordercomplete')
        }
        else {
          dispatch(openErrorSnackbar(data.error.message))
          dispatch(setPlaceOrderError(data.error.message))
        }
      })
    }

    else {
      dispatch(placeOrderNoAuth({
        email, 
        firstName, 
        lastName, 
        country, 
        addressLineOne, 
        addressLineTwo, 
        city,
        state,
        zip,
        phone,
        notes,
        orderedProducts: cartProducts,
        shippingCost,
        total: subTotal
      }))
      .then(data => {
        if (data.type === 'order/placeOrderNoAuth/fulfilled') {
          dispatch(openSuccessSnackbar('Order placed succesfully!'))
          dispatch(setPlaceOrderError('')) 
          navigate('/ordercomplete')
        }
        else {
          dispatch(openErrorSnackbar(data.error.message))
          dispatch(setPlaceOrderError(data.error.message))
        }
      })
    }
  }

  return (
    <div className="placeorder">

      <ul className="placeorder-items">
        <li className="placeorder-item">
          <div className="item-name">Subtotal</div>
          <div className="item-value">${subTotal}.00</div>
        </li>
        <li className="placeorder-item">
          <div className="item-name">Shipping</div>
          <div className="item-value">{city}, {state}</div>
        </li>
        <li className="placeorder-item">
          <div className="item-name">Shipping cost</div>
          <div className="item-value">$50.00</div>
        </li>
        <li className="placeorder-item">
          <div className="item-name">Coupon</div>
          <div className="item-value">-${discount}.00</div>
        </li>
        <li className="placeorder-item">
          <div className="item-name">Total</div>
          <div className="item-value">
            {discount > 0 ? <span className="oldtotalprice">${total + discount}.00</span> : ''}
            <span className="totalprice">${isLogin ? total : subTotal}.00</span>
          </div>
        </li>
      </ul>

      <hr />

      <div className="checkbox-confirm">
        <div className="confirminput-wrapper">
          <input 
            type="checkbox"
            className="confirminput"
            onChange={clickConfirm}
          />
        </div>
        <label 
          htmlFor=""
          className="confirmlabel"
        >
          I confirm that my address is 100% correct and 
          WILL NOT hold Vitamin Shop liable if this shipment 
          is sent to an incorrect address. *
        </label>
      </div>

      <hr />
      <div className="placeorder-error">
        {placeOrderError}
      </div>
        <button 
          className={isConfirmed ? "placeorder-btn" : "btn-disabled"}
          onClick={clickPlaceOrder}
        >
          {isPlaceOrderLoading ? <ButtonLoader /> :
            <div>
              Place Order<span>|</span>${isLogin ? total : subTotal}.00
            </div>
          }
        </button>
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

export default PlaceOrder;
