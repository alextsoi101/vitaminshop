import React from "react";
import OrderItemCard from "../cards/OrderItemCard";

const OrderItems = (props) => {
  return (
    <div className="orderitems">
      <div className="orderitems-header">
        Items
      </div>
      <div className="orderitems-cards">
        {
          props.orderItems.map(item => 
            <OrderItemCard
              key={item.id}
              image={item.product.images[0]}
              name={item.product.name}
              count={item.count}
              price={item.product.price}
              total={item.totalPrice}
            />
          )
        }
      </div>
    </div>
  )
}

export default OrderItems;