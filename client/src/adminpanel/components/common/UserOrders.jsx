import React from "react";
import UserOrderCard from "../cards/UserOrderCard";

const UserOrders = () => {

  return (
    <div className="userorders">
      <div className="userorders-header">
        Order History
      </div>
      <div className="orders-container">
        <UserOrderCard 
          id={21}
          createdAt='Aug 9, 2023'
          total={2311}
        />
        <UserOrderCard 
          id={211}
          createdAt='Sep 21, 2023'
          total={2311}
        />
        <UserOrderCard 
          id={21}
          createdAt='Sep 21, 2023'
          total={23121}
        />
      </div>
    </div>
  )
}

export default UserOrders;