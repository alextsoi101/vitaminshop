import React from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import defaultphoto from '../../../assets/images/user.png'

const UserListCard = (props) => {

  const navigate = useNavigate();

  const goToUserInfo = () => {
    navigate(`${props.id}`)
  }

  return (
    <tr className="userlistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #{props.id}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-image">
          <div className="image-wrapper">
            <img src={props.image ? props.image : defaultphoto} alt="userphoto" />
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-fullname">
          <button className="link-button">
            {props.firstname || props.lastname ? `${props.firstname} ${props.lastname}` : 'No name' }
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-email">
          {props.email}
        </div>
      </td>
      <td>
        <div className="td-content td-created-at">
        {props.createdAt}
        </div>
      </td>
      <td>
        <div className="td-content td-info">
          <button 
            className="info-btn"
            onClick={goToUserInfo}
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