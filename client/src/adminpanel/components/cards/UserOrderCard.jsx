import React from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

const UserOrderCard = (props) => {

  const navigate = useNavigate();

  const goToOrderInfo = () => {
    navigate(`/admin/orders/${props.id}`)
  }

  return (
    <div className="userordercard">
      <div className="userorder-id">
        <span 
          onClick={goToOrderInfo}
        >
          #{props.id}
        </span>
      </div>
      <div className="userorder-created-at">
        {props.createdAt}
      </div>
      <div className="userorder-total">
        ${props.total}.00
      </div>
      <div 
        className="userorder-info-icon"
        onClick={goToOrderInfo}
      >
        <InfoIcon sx={{fontSize: '20px'}}/>
      </div>
    </div>
  )
}

export default UserOrderCard;