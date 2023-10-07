import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BallotIcon from '@mui/icons-material/Ballot';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DiscountIcon from '@mui/icons-material/Discount';
import CategoryIcon from '@mui/icons-material/Category';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from "react-redux";
import { adminLogout, adminLoginCheck } from "../../store/adminSlice";

const AdminNavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {pathname} = useLocation();
  const [currentLocation, setCurrentLocation] = useState(pathname);

  const goToDashboard = () => {
    setCurrentLocation('/admin')
    navigate('dashboard')
  }

  const goToOrderList = () => {
    setCurrentLocation('/admin/orders')
    navigate('orders')
  }

  const goToProductList = () => {
    setCurrentLocation('/admin/products')
    navigate('products')
  }

  const goToUserList = () => {
    setCurrentLocation('/admin/users')
    navigate('users')
  }

  const goToPromocodeList = () => {
    setCurrentLocation('/admin/promocodes')
    navigate('promocodes')
  }

  const goToCategoryList = () => {
    setCurrentLocation('/admin/categories')
    navigate('categories')
  }

  const goToAddProduct = () => {
    setCurrentLocation('/admin/products/new')
    navigate('products/new')
  }

  const goToAddPromocode = () => {
    setCurrentLocation('/admin/promocodes/new')
    navigate('promocodes/new')
  }

  const handleLogout = () => {
    setCurrentLocation('/admin/login')
    dispatch(adminLogout())
    dispatch(adminLoginCheck())
  }

  return (
    <div className="adminnavbar">
      <ul className="adminnavbar-list">
        <div className="adminnavbar-block">
          <div className="block-main-text">
            STATISTIC
          </div>
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
        </div>

        <div className="adminnavbar-block">
          <div className="block-main-text">
            CATALOG
          </div>
          <li
            className="list-item"
            onClick={goToProductList}
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
            onClick={goToCategoryList}
          >
            <div 
              className={currentLocation === '/admin/categories' ? "left-mark" : ""}
            >
            </div>
            <div className={currentLocation === '/admin/categories' ? "item-content-active" : "item-content"}>
              <div className="icon-wrapper">
                <CategoryIcon fontSize='24' />
              </div> 
              <span>Categories</span>
            </div>
          </li>
          <li
            className="list-item"
            onClick={goToPromocodeList}
          >
            <div 
              className={currentLocation === '/admin/promocodes' ? "left-mark" : ""}
            >
            </div>
            <div className={currentLocation === '/admin/promocodes' ? "item-content-active" : "item-content"}>
              <div className="icon-wrapper">
                <DiscountIcon fontSize='24' />
              </div> 
              <span>Promocodes</span>
            </div>
          </li>
          <li
            className="list-item"
            onClick={goToOrderList}
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
        </div>

        <div className="adminnavbar-block">
          <div className="block-main-text">
            CREATE
          </div>
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
            onClick={goToAddPromocode}
          >
            <div 
              className={currentLocation === '/admin/promocodes/new' ? "left-mark" : ""}
            >
            </div>
            <div className={currentLocation === '/admin/promocodes/new' ? "item-content-active" : "item-content"}>
              <div className="icon-wrapper">
                <AddBoxIcon fontSize='24' />
              </div> 
              <span>New Promocode</span>
            </div>
          </li>
        </div>

        <div className="adminnavbar-block">
          <div className="block-main-text">
            LOGOUT
          </div>
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
        </div>
      </ul>
    </div>
  )
}

export default AdminNavBar;