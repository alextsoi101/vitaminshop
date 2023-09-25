import React from "react";
import OrderItemCard from "../cards/OrderItemCard";

const OrderItems = () => {

  return (
    <div className="orderitems">
      <div className="orderitems-header">
        Items
      </div>
      <div className="orderitems-cards">
        <OrderItemCard
          image='https://iili.io/JJ3E4KG.jpg'
          name='Vitamin test 001010 adwda  adwwdwwdwdw'
          count={2}
          price={120}
          total={240}
        />
        <OrderItemCard
          image='https://iili.io/JJ3E4KG.jpg'
          name='Vitamin test 001010 adwda  adwwdwwdwdw'
          count={2}
          price={120}
          total={240}
        />
        <OrderItemCard
          image='https://iili.io/JJ3E4KG.jpg'
          name='Vitamin test 001010 adwda  adwwdwwdwdw wdwww adwdwa awdwa'
          count={2}
          price={120}
          total={240}
        />
      </div>
    </div>
  )
}

export default OrderItems;