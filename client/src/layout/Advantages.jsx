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
              `Whether it is answering any questions you have 
              before making a purchase, helping out with the 
              buying process itself or taking your feedback under 
              consideration, we are proud to provide high quality 
              customer service that makes you - the customer - the 
              most important person in the transaction.`
            }
          />
          <AdvantageCard 
            image={diamondicon}
            maintext="BEST VALUE"
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
            image={deliveryicon}
            maintext="DELIVERY INSURANCE"
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
            image={medalicon}
            maintext="HIGHEST QUALITY"
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
            image={handshakeicon}
            maintext="TRUST"
            description={
              `Whether it is answering any questions you have 
              before making a purchase, helping out with the 
              buying process itself or taking your feedback under 
              consideration, we are proud to provide high quality 
              customer service that makes you - the customer - the 
              most important person in the transaction.`
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Advantages;
