import React from 'react';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/userSlice';

const AccountMenu = ({content, setContent, closeAccountMenu}) => {

  const dispatch = useDispatch();

  const setAccountDetailsContent = () => {
    setContent('account')
    if (closeAccountMenu) {
      closeAccountMenu()
    }
  }
  const setOrdersContent = () => {
    setContent('orders')
    if (closeAccountMenu) {
      closeAccountMenu()
    }
  }
  const setAddressesContent = () => {
    setContent('addresses')
    if (closeAccountMenu) {
      closeAccountMenu()
    }
  }
  const handleLogout = () => {
    dispatch(userLogout())
  }


  return (
    <div className="accountmenu">
      <ul className="menu">
        <li 
          className={content === 'account' ? "menu-item-active" : "menu-item"}
          onClick={setAccountDetailsContent}
        >
          <div>Account details</div>
          <AccountCircleOutlinedIcon sx={{ fontSize: 20 }} />
        </li>
        <li 
          className={content === 'orders' ? "menu-item-active" : "menu-item"}
          onClick={setOrdersContent}
        >
          <div>Orders</div>
          <AssignmentOutlinedIcon sx={{ fontSize: 20 }} />
        </li>
        <li 
          className={content === 'addresses' ? "menu-item-active" : "menu-item"}
          onClick={setAddressesContent}
        >
          <div>Addresses</div>
          <HomeOutlinedIcon sx={{ fontSize: 21 }} />
        </li>
        <li 
          className="menu-item menu-item-logout"
          onClick={handleLogout}
        >
          <div>Log out</div>
          <LogoutOutlinedIcon sx={{ fontSize: 20 }} />
        </li>
      </ul>
    </div>
  )
}

export default AccountMenu;