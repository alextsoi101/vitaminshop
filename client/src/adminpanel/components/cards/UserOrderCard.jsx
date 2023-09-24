import React from "react";
import InfoIcon from '@mui/icons-material/Info';

const UserOrderCard = (props) => {
  return (
    <div className="userordercard">
      <div className="userorder-id">
        <span>#{props.id}</span>
      </div>
      <div className="userorder-created-at">
        {props.createdAt}
      </div>
      <div className="userorder-total">
        ${props.total}.00
      </div>
      <div className="userorder-info-icon">
        <InfoIcon sx={{fontSize: '20px'}}/>
      </div>
    </div>
  )
}

export default UserOrderCard;