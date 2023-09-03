import React from "react";
import OrderStepper from "../components/common/OrderStepper";
import Cart from "../components/common/Cart";
import CheckoutOrder from "../components/common/CheckoutOrder";
import OrderBenefits from "../components/common/OrderBenefits";
import '../styles/pages/cartpage.scss';

const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="stepper-wrapper">
        <OrderStepper activeStep={1} />
      </div>

      <div className="cartpage-content">
        <div className="cartpage-cart-benefits">
          <div className="cartpage-cart">
            <Cart />
          </div>
          <div className="cartpage-benefits">
            <OrderBenefits />
          </div>
        </div>
        <div className="cartpage-checkoutcard">
          <CheckoutOrder />
        </div>
      </div>
    </div>
  )
}

export default CartPage;