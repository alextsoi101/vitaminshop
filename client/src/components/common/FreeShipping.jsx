import React, { useEffect } from "react";
import ProgressBar from "../MUI/ProgressBar";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsShippingFree } from "../../store/cartSlice";

const FreeShipping = () => {

  const dispatch = useDispatch();
  const cardSubTotal = useSelector(state => state.cart.subTotal);
  const isShippingFree = useSelector(state => state.cart.isShippingFree);

  useEffect(() => {
    if (cardSubTotal >= 100) {
      dispatch(setIsShippingFree(true))
    } else {
      dispatch(setIsShippingFree(false))
    }
  }, [cardSubTotal])

  return (
    <div className="freeshipping">
      <ProgressBar 
        progress={cardSubTotal <= 100 ? cardSubTotal : 100}
      />

      { isShippingFree ? 
        <div className="shipping-free">
          <div className="yourorderover-text">
            Your order over <span className="span-100">$100.00</span>
          </div>
          <div className="shippingisfree-text">Shipping is Free!</div>
        </div>
        :
        <div className="shipping-not-free">
          <div className="getfree-text">
            Get Free <span className="span-shipping">Shipping</span> for orders over <span className="span-100">$100.00</span> 
          </div>
          <Link to='/shop'>
            <div className="continueshopping-text">Continue Shopping</div>
          </Link>
        </div>
      }

    </div>
  )
}

export default FreeShipping;