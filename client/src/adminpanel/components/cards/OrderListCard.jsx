import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import defaultphoto from '../../../assets/images/user.png'

const OrderListCard = (props) => {
  return (
    <tr className="orderlistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #232
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-email">
          <button className="link-button">
            alextestpro@gmail.com
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-created-at">
          Sep 19, 2023
        </div>
      </td>
      <td>
        <div className="td-content td-total">
          $<span>342</span>.00
        </div>
      </td>
    </tr>
  )
}

export default OrderListCard;