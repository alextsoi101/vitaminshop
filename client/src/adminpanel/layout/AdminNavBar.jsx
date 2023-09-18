import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BallotIcon from '@mui/icons-material/Ballot';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AdminNavBar = () => {

  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [currentLocation, setCurrentLocation] = useState(pathname);

  const goToDashboard = () => {
    setCurrentLocation('/admin')
    navigate('dashboard')
  }

  const goToOrders = () => {
    setCurrentLocation('/admin/orders')
    navigate('orders')
  }

  const goToProducts = () => {
    setCurrentLocation('/admin/products')
    navigate('products')
  }

  const goToAddProduct = () => {
    setCurrentLocation('/admin/products/new')
    navigate('products/new')
  }

  const goToUserList = () => {
    setCurrentLocation('/admin/users')
    navigate('users')
  }

  const handleLogout = () => {
    setCurrentLocation('signout')
    navigate('/')
  }

  return (
    <div className="adminnavbar">
      <ul className="adminnavbar-list">
        <li
          className="list-item"
          onClick={goToDashboard}
        >
          <div 
            className={currentLocation === '/admin' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === '/admin' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <DashboardIcon fontSize='24' />
            </div> 
            <span>Dashboard</span>
          </div>
        </li>
        <li
          className="list-item"
          onClick={goToOrders}
        >
          <div 
            className={currentLocation === '/admin/orders' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === '/admin/orders' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <BallotIcon fontSize='24' />
            </div> 
            <span>Orders</span>
          </div>
        </li>
        <li
          className="list-item"
          onClick={goToProducts}
        >
          <div 
            className={currentLocation === '/admin/products' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === '/admin/products' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <InventoryIcon fontSize='24' />
            </div> 
            <span>Products</span>
          </div>
        </li>
        <li
          className="list-item"
          onClick={goToAddProduct}
        >
          <div 
            className={currentLocation === '/admin/products/new' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === '/admin/products/new' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <AddBoxIcon fontSize='24' />
            </div> 
            <span>New Product</span>
          </div>
        </li>
        <li
          className="list-item"
          onClick={goToUserList}
        >
          <div 
            className={currentLocation === '/admin/users' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === '/admin/users' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <PeopleAltIcon fontSize='24' />
            </div> 
            <span>Users</span>
          </div>
        </li>
        <li
          className="list-item"
          onClick={handleLogout}
        >
          <div 
            className={currentLocation === 'logout' ? "left-mark" : ""}
          >
          </div>
          <div className={currentLocation === 'logout' ? "item-content-active" : "item-content"}>
            <div className="icon-wrapper">
              <ExitToAppIcon fontSize='24' />
            </div> 
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AdminNavBar;