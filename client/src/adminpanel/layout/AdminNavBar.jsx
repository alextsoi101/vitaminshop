import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BallotIcon from '@mui/icons-material/Ballot';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AdminNavBar = () => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('dashboard');

  const goToDashboard = () => {
    setCurrentPage('dashboard')
    navigate('dashboard')
  }

  const goToOrders = () => {
    setCurrentPage('orders')
    navigate('orders')
  }

  const goToProducts = () => {
    setCurrentPage('products')
    navigate('products')
  }

  const goToAddProduct = () => {
    setCurrentPage('addproduct')
    navigate('addproduct')
  }

  const goToUserList = () => {
    setCurrentPage('users')
    navigate('users')
  }

  const handleLogout = () => {
    setCurrentPage('signout')
    navigate('users')
  }

  return (
    <div className="adminnavbar">
      <ul className="adminnavbar-list">
        <li
          className="list-item"
          onClick={goToDashboard}
        >
          <div 
            className={currentPage === 'dashboard' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'dashboard' ? "item-content-active" : "item-content"}>
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
            className={currentPage === 'orders' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'orders' ? "item-content-active" : "item-content"}>
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
            className={currentPage === 'products' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'products' ? "item-content-active" : "item-content"}>
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
            className={currentPage === 'addproduct' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'addproduct' ? "item-content-active" : "item-content"}>
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
            className={currentPage === 'users' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'users' ? "item-content-active" : "item-content"}>
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
            className={currentPage === 'logout' ? "left-mark" : ""}
          >
          </div>
          <div className={currentPage === 'logout' ? "item-content-active" : "item-content"}>
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