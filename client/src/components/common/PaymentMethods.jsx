import React from 'react';
import PaymentMethod from '../UI/PaymentMethod';
import mastercardlogo from '../../assets/images/mastercard.png';
import visalogo from '../../assets/images/visa.png';
import bitcoinlogo from '../../assets/images/bitcoin.png';

const PaymentMethods = (props) => {

  return (
    <div className="paymentmethods">
       <PaymentMethod 
          image={mastercardlogo}
       />
       <PaymentMethod 
          image={visalogo}
       />
       <PaymentMethod 
          image={bitcoinlogo}
       />
    </div>
  )
}

export default PaymentMethods;
