import React from "react";
import { useNavigate } from 'react-router-dom';

const OrderListCard = (props) => {

  const navigate = useNavigate();

  const goToOrderInfoPage = () => {
    navigate(`${props.id}`)
  }

  return (
    <tr className="orderlistcard">
      <td>
        <div className="td-content td-id">
          <button 
            className="link-button"
            onClick={goToOrderInfoPage}
          >
            #{props.id}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-email">
          <button 
            className="link-button"
            onClick={goToOrderInfoPage}
          >
            {props.email}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-created-at">
          {props.createdAt}
        </div>
      </td>
      <td>
        <div className="td-content td-total">
          $<span>{props.total}</span>.00
        </div>
      </td>
    </tr>
  )
}

export default OrderListCard;