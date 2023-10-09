import React from 'react';
import AdvantageCard from '../components/cards/AdvantageCard';
import supporticon from '../assets/icons/advantages-support.svg';
import securityicon from '../assets/icons/advantages-security.svg';
import diamondicon from '../assets/icons/advantages-support.svg';
import deliveryicon from '../assets/icons/advantages-delivery.svg';
import medalicon from '../assets/icons/advantages-medal.svg';
import handshakeicon from '../assets/icons/advantages-handshake.svg';

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages-content-wrapper">
        <h1>
          WHAT MAKES US THE <span>#1</span> <br /> 
          ONLINE VITAMIN STORE?
        </h1>
        <div className="advantages-cards">
          <AdvantageCard 
            image={supporticon}
            maintext="CUSTOMER SERVICE"
            description={
              `Whether it is answering any questions you have 
              before making a purchase, helping out with the 
              buying process itself or taking your feedback under 
              consideration, we are proud to provide high quality 
              customer service that makes you - the customer - the 
              most important person in the transaction.`
            }
          />
          <AdvantageCard 
            image={securityicon}
            maintext="SECURITY"
            description={
              `When it comes to security, we only keep what details
               are necessary for you to have an account with us and 
               make an order. When it comes to shipping your mail 
               order marijuana out, we use only tamper-proof and 
               discrete packaging so then what you have purchased 
               is your business only.`
            }
          />
          <AdvantageCard 
            image={diamondicon}
            maintext="BEST VALUE"
            description={
              `We are continually adjusting what we supply and 
              our prices to ensure that we maintain an optimal 
              balance of affordable and quality for our products. 
              We invest in the best quality strains that we can 
              find and are always on the lookout for new, 
              affordable and high quality weed products.`
            }
          />
          <AdvantageCard 
            image={deliveryicon}
            maintext="DELIVERY INSURANCE"
            description={
              `If your mail order vitamins becomes lost, 
              stolen, or damaged during transit, we will 
              send you a replacement completely free of charge. 
              Free US Post shipping on all orders over $100`
            }
          />
          <AdvantageCard 
            image={medalicon}
            maintext="HIGHEST QUALITY"
            description={
              `All of our cannabis products are tested to 
              ensure that they are the highest quality possible. 
              We work with expert suppliers and are always 
              revising what makes a quality cannabis product 
              to ensure that we have only the best available.`
            }
          />
          <AdvantageCard 
            image={handshakeicon}
            maintext="TRUST"
            description={
              `With over 15 years in the weed business, you can 
              rest assured that you will be taken care of. 
              You can guarantee that we have your best interests 
              in mind. Feel free to check out our reviews.`
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Advantages;
