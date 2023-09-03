import React from "react";
import OrderStepper from "../components/common/OrderStepper";
import CompleteOrder from "../components/common/CompleteOrder";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/pages/ordercompletepage.scss';

const OrderCompletePage = () => {

  const total = useSelector(state => state.order.total);
  const subTotal = useSelector(state => state.cart.subTotal);
  const discount = useSelector(state => state.cart.discount);

  return (
    <div className="ordercompletepage">

      <div className="stepper-wrapper">
        <OrderStepper activeStep={3} />
      </div>

      <div className="ordercomplete-content">

        <div className="complete-order">
          <CompleteOrder />
        </div>

        <div className="ordercomplete-info">
          <ul className="ordercomplete-info-items">
            <li className="ordercomplete-item">
              <div className="item-name">Subtotal</div>
              <div className="item-value">${subTotal}.00</div>
            </li>
            <li className="ordercomplete-item">
              <div className="item-name">Shipping cost</div>
              <div className="item-value">$50.00</div>
            </li>
            <li className="ordercomplete-item">
              <div className="item-name">Coupon</div>
              <div className="item-value">-${discount}.00</div>
            </li>
            <li className="ordercomplete-item total-item">
              <div className="item-name total-name">TOTAL</div>
              <div className="item-value total-value">${total}.00</div>
            </li>
          </ul>
        </div>

        <div className="continueshopping">
          <div className="text-continueshopping">Continue Shopping, Click button bellow</div>
          <Link to='/shop'>
            <button className="continue-btn">
              Continue shopping
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default OrderCompletePage;