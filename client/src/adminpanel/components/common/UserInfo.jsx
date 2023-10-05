import React from "react";

const UserInfo = (props) => {

  return (
    <div className="userinfo">
      <div className="userinfo-item">
        <div className="item-header">
          FULL NAME
        </div>
        <div className="item-value">
          {props.firstname || props.lastname ? 
            `${props.firstname} ${props.lastname}`
            :
            'No name'
          }
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          EMAIL
        </div>
        <div className="item-value">
          {props.email}
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          ROLE
        </div>
        <div className="item-value">
          {props.role}
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          CREATED AT
        </div>
        <div className="item-value">
          {props.createdAt}
        </div>
      </div>
    </div>
  )
}

export default UserInfo;