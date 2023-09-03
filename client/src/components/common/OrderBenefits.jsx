import React from 'react';
import OrderBenefitCard from '../cards/OrderBenefitCard';
import orderticketicon from '../../assets/icons/order-ticket.svg';
import orderboxicon from '../../assets/icons/order-box.svg';
import ordertruckicon from '../../assets/icons/order-truck.svg';

const OrderBenefis = () => {
  return (
    <div className="orderbenefits">
      <OrderBenefitCard 
        icon={orderticketicon}
        maintext='Order by 10pm for next day delivery'
        description={
          `We deliver Monday to Saturday - excluding Holidays`
        }
      />
      <OrderBenefitCard 
        icon={orderboxicon}
        maintext='Free delivery for orders over $100'
        description={
          `Home delivery is $50.00 for orders under 
          $100 and is FREE for all orders over $100`
        }
      />
      <OrderBenefitCard 
        icon={ordertruckicon}
        maintext='30 days to refund'
        description={
          `30 days to return it to us for a refund. We have 
          made returns SO EASY - you can now return your order 
          to a store or send it with FedEx FOR FREE`
        }
      />
    </div>
  )
}

export default OrderBenefis;