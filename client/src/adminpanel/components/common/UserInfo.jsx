import React from "react";

const UserInfo = (props) => {

  return (
    <div className="userinfo">
      <div className="userinfo-item">
        <div className="item-header">
          FULL NAME
        </div>
        <div className="item-value">
          Alex Tsoi
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          EMAIL
        </div>
        <div className="item-value">
          alex@gmail.com
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          ROLE
        </div>
        <div className="item-value">
          USER
        </div>
      </div>
      <div className="userinfo-item">
        <div className="item-header">
          CREATED AT
        </div>
        <div className="item-value">
          Sep 19, 2023
        </div>
      </div>
    </div>
  )
}

export default UserInfo;