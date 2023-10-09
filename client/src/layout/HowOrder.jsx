import React from 'react';
import { Link } from 'react-router-dom';
import HowOrderCard from '../components/cards/HowOrderCard';
import registerimage from '../assets/images/howorder-register.png';
import shopimage from '../assets/images/howorder-shop.png';
import paymentimage from '../assets/images/howorder-payment.png';
import relaximage from '../assets/images/howorder-relax.png';

const HowOrder = () => {
  return (
    <div className="howorder">
      <h1>
        HOW TO ORDER VITAMINS <br />
        ONLINE FROM OUR SHOP
      </h1>
      <div className="howorder-description">
        Ordering vitamins online from our website is easy. 
        We are proud to have made the process accessible across 
        multiple platforms and simple to understand, meaning that 
        more people can come to us to buy their vitamins products online.
      </div>
      <div className="howorder-cards">
        <HowOrderCard 
          stepnumber="1"
          image={registerimage}
          maintext="REGISTER"
          description={
            `Sign up for an account with us. 
            This is quick and simple. We don't require any 
            more details from you than the bare minimum needed for 
            you to place an order and get your product delivered.`
          }
        />
        <HowOrderCard 
          stepnumber="2"
          image={shopimage}
          maintext="SHOP"
          description={
            `Decide on what you want to purchase. We stock a wide 
            range of vitamins, supplements and probiotics
            there is bound to be something for everyone.`
          }
        />
        <HowOrderCard 
          stepnumber="3"
          image={paymentimage}
          maintext="MAKE PAYMENT"
          description={
            `Pay securely. Our site boasts sturdy protection certificates
            to keep your card details and related data safe.`
          }
        />
        <HowOrderCard 
          stepnumber="4"
          image={relaximage}
          maintext="RELAX"
          description={
            `Your product will be packaged discretely and shipped by US 
            Post Service. We will provide you with a tracking number so then 
            you can follow your mail order every step of the way.`
          }
        />
      </div>
      <Link to='shop'>
        <button>
          Order Vitamins
        </button>
      </Link>
    </div>
  )
}

export default HowOrder;
