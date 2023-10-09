import React from 'react';
import BenefitCard from '../components/cards/BenefitCard';
import delivery from '../assets/images/benefit-delivery.png';
import safe from '../assets/images/benefit-safe.png';
import pricing from '../assets/images/benefit-pricing.png';

const Benefits = () => {
  return (
    <div className="benefits">
        <BenefitCard
          image={delivery}
          name={`Reliable Shipping`}
          description={
            `Our delivery service provides
            Xpress Shipping right to your doorstep!
            You can also opt in for shipping insurance.
            For orders over $100, shipping is free`
          }
        />
        <BenefitCard
          image={safe}
          name={`You're Safe With Us`}
          description={
            `Our secure payment system accepts the most 
            common forms of payments making the checkout 
            process quicker! 
            The payments we accept are debit, 
            all major credit cards, and cryptocurrency.`
          }
        />
        <BenefitCard
          image={pricing}
          name={`Best Quality & Pricing`}
          description={
            `Here at Vitamin Shop, we take pride in the 
            quality of our products and service. 
            Our prices are set to ensure you receive your 
            medication at a reasonable price and safely`
          }
        />
    </div>
  )
}

export default Benefits;
