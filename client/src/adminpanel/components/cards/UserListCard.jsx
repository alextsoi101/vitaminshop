import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import defaultphoto from '../../../assets/images/user.png'

const UserListCard = (props) => {
  return (
    <tr className="userlistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #232
          </button>
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
          <button className="link-button">
            Alex Tsoi
          </button>
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
        <div className="td-content td-info">
          <button 
            className="info-btn"
            // onClick={}
          >
            <InfoIcon 
              sx={{fontSize: "20px"}}
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserListCard;