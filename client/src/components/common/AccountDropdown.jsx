import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../store/userSlice';
import defaultphoto from '../../assets/images/user.png';

const AccountDropdown = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.user.email);
  const firstName = useSelector(state => state.user.firstName);
  const lastName = useSelector(state => state.user.lastName);
  const userImage = useSelector(state => state.user.userImage);
  const menuRef = useRef();

  const handleLogout = () => {
    dispatch(userLogout())
  }

  return (
    <div className="account-dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => navigate('/myaccount')}
      >
        <div className="myacc-text">My account</div>
        <div className="image-wrapper">
          <img src={userImage ? userImage : defaultphoto} alt="userphoto" />
        </div>
      </button>
      <div className="dropdown-container">
        <ul 
          className="account-menu"
          ref={menuRef}
        >
          <li 
            className="name"
            onClick={() => navigate('/myaccount')}
          >
            {capitalise(firstName)} {capitalise(lastName)}
          </li>
          <li 
            className="email"
            onClick={() => navigate('/myaccount')}
          >
            {email}
          </li>
          <li
            className="link"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCartOutlinedIcon sx={{fontSize: '16px'}} /> <span>My Cart</span>
          </li>
          <li
            className="link"
            onClick={() => navigate('/myaccount')}
          >
            <SettingsOutlinedIcon sx={{fontSize: '16px'}} /> <span>Account settings</span>
          </li>
          <li
            className="logout"
            onClick={handleLogout}
          >
            <LogoutIcon sx={{fontSize: '16px'}} /> <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AccountDropdown;