import React from "react";
import OrderStepper from "../components/common/OrderStepper";
import ShippingForm from "../components/forms/ShippingForm";
import PlaceOrder from "../components/common/PlaceOrder";
import { useSelector } from "react-redux";
import '../styles/pages/checkoutpage.scss';

const CheckoutPage = () => {

  const isLoadAddressLoading = useSelector(state => state.user.isLoadAddressLoading);

  return (
    <div className="checkoutpage">

      <div className="stepper-wrapper">
        <OrderStepper activeStep={2} />
      </div>
      <div className="checkoutpage-content">
        <div className="checkoutpage-shippingform">
          {isLoadAddressLoading ? <div>Loading...</div> : <ShippingForm />}
        </div>
        <div className="checkoutpage-placeorder">
          <PlaceOrder />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage;