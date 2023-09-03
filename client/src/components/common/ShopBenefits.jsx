import React from 'react';
import delivery from '../../assets/images/benefit-delivery.png';
import safe from '../../assets/images/benefit-safe.png';
import pricing from '../../assets/images/benefit-pricing.png';

const ShopBenefits = () => {
  return (
    <div className="shopbenefits">

      <div className="benefit">
        <div className="benefit-img">
          <img src={delivery} alt="deliveryicon" />
        </div>
        <span className="description">Reliable Shipping</span>
      </div>

      <div className="vertical-divider"></div>

      <div className="benefit">
        <div className="benefit-img">
          <img src={safe} alt="safeicon" />
        </div>
        <span className="description">You're Safe With Us</span>
      </div>

      <div className="vertical-divider"></div>

      <div className="benefit">
        <div className="benefit-img">
          <img src={pricing} alt="pricingicon" />
        </div>
        <span className="description">Best Quality & Pricing</span>
      </div>

    </div>
  )
}

export default ShopBenefits;