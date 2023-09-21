import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import defaultphoto from '../../../assets/images/user.png'

const UserListCard = (props) => {
  return (
    <tr className="userlistcard">
      <td>
        <div className="td-content td-id">
          #232
        </div>
      </td>
      <td>
        <div className="td-content td-image">
          <div className="image-wrapper">
            <img src={defaultphoto} alt="" />
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-fullname">
          <div className="td-fullname-text">
            Alex Tsoi
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-email">
          alextestpro@gmail.com
        </div>
      </td>
      <td>
        <div className="td-content td-created-at">
          Sep 19, 2023
        </div>
      </td>
      <td>
        <div className="td-content td-edit">
          <button 
            className="delete-product-btn"
            // onClick={}
          >
            <EditIcon 
              sx={{fontSize: "20px"}}
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserListCard;