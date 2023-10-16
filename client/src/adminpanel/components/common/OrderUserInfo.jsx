import React from "react";
import { useNavigate } from "react-router-dom";

const OrderUserInfo = (props) => {

  const navigate = useNavigate();

  const goToUserInfo = () => {
    navigate(`/admin/users/${props.userId}`)
  }

  return (
    <div className="orderuserinfo">
      <div className="orderuserinfo-header">
        User 
        { props.userId &&
          <span onClick={goToUserInfo} style={{marginLeft: '10px'}}>
          #{props.userId}
          </span>
        }
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Full Name
        </div>
        <div className="item-value">
          {props.firstName} {props.lastName}
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Contact Info
        </div>
        <div className="item-value">
          <div>{props.email}</div>
          <div>{props.phone}</div>
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Shipping Address
        </div>
        <div className="item-value">
          <div>
            {props.city}
          </div>
          <div>
            {props.zip} {props.city}
          </div>
          <div>
            {props.state}, {props.country}
          </div>
          <div>
            {props.addressLineOne} {props.addressLineTwo}
          </div>
        </div>
      </div>
      <div className="orderuserinfo-item">
        <div className="item-header">
          Order notes
        </div>
        <div className="item-value">
          {props.notes ? props.notes : '---'}
        </div>
      </div>
    </div>
  )
}

export default OrderUserInfo;
