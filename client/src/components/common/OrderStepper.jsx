import React from 'react';
import cartwhiteicon from '../../assets/icons/cart-white.svg';
import walletgreenicon from '../../assets/icons/wallet-green.svg';
import walletwhiteicon from '../../assets/icons/wallet-white.svg';
import ordergreenicon from '../../assets/icons/order-green.svg';
import orderwhiteicon from '../../assets/icons/order-white.svg';
import checkicon from '../../assets/icons/check-step.svg';

const OrderStepper = (props) => {

  const steps = [
    'Shopping Cart',
    'Checkout',
    'Order Complete'
  ]

  const stepChecker = (index, activestep) => {
    switch (true) {
      case index < activestep - 1:
        return 'step-complete';
      case index === activestep - 1:
        return 'step-active';
      case index > activestep - 1:
        return 'step';
    }
  }

  const stepIconChecker = (index, activestep) => {
    switch (true) {
      case index < activestep - 1: 
        return checkicon

      case index === 0:
        switch (true) {
          case index === activestep - 1: return cartwhiteicon
        }
      case index === 1:
        switch (true) {
          case index === activestep - 1: return walletwhiteicon
          case index > activestep - 1: return walletgreenicon
        }
      case index === 2:
        switch (true) {
          case index === activestep - 1: return orderwhiteicon
          case index > activestep - 1: return ordergreenicon
        }
    }
  }

  return (
    <div className="orderstepper">
      {steps.map((step, index) => 
        <div 
          key={step}
          className={stepChecker(index, props.activeStep)}
        >
          <div className={index === 0 ? "step-connector-none" : "step-connector"}></div>
          <div className="step-icon-wrapper">
            <img 
              src={stepIconChecker(index, props.activeStep)} 
              alt="stepicon" 
            />
          </div>
          <div className="step-text">
            {step}
          </div>
      </div>
      )}
    </div>
  )
}

export default OrderStepper;
