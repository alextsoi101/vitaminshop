import React from "react";
import UserOrderCard from "../cards/UserOrderCard";

const UserOrders = (props) => {
  return (
    <div className="userorders">
      <div className="userorders-header">
        Order History
      </div>
      { props.userOrders.length > 0 ?
        <div className="orders-container">
          {
            props.userOrders.map(order =>
              <UserOrderCard 
                id={order.id}
                createdAt={order.createdAt}
                total={order.total}
              />
            )
          }
        </div>
        :
        <div style={{padding: '20px'}}>User does not have any order yet.</div>
      }
    </div>
  )
}

export default UserOrders;