import React, { useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AdminHeader from '../adminpanel/layout/AdminHeader';
import AdminNavBar from '../adminpanel/layout/AdminNavBar';
import ConfirmModal from '../adminpanel/components/modal/ConfirmModal';
import AdminSuccessSnackbar from '../adminpanel/components/modal/AdminSuccessSnackbar';
import AdminErrorSnackbar from '../adminpanel/components/modal/AdminErrorSnackbar';
import LoginPage from '../adminpanel/pages/LoginPage';
import DashboardPage from '../adminpanel/pages/DashboardPage';
import ProductListPage from '../adminpanel/pages/ProductListPage';
import ProductNewPage from '../adminpanel/pages/ProductNewPage';
import ProductEditPage from '../adminpanel/pages/ProductEditPage';
import UserListPage from '../adminpanel/pages/UserListPage';
import UserInfoPage from '../adminpanel/pages/UserInfoPage';
import PromoListPage from '../adminpanel/pages/PromoListPage';
import PromoNewPage from '../adminpanel/pages/PromoNewPage';
import PromoEditPage from '../adminpanel/pages/PromoEditPage';
import OrderListPage from '../adminpanel/pages/OrderListPage';
import OrderInfoPage from '../adminpanel/pages/OrderInfoPage';
import CategoryListPage from '../adminpanel/pages/CategoryListPage';
import ScreenWidthErrorPage from '../adminpanel/pages/ScreenWidthErrorPage';
import { useSelector } from 'react-redux';
import '../adminpanel/styles/globalstyles/adminpanel.scss';

const AdminRouter = () => {

  const isAdminLogin = useSelector(state => state.admin.isAdminLogin);
  const screenWidth = window.innerWidth;

  return (
    <Routes>
      <Route
        element={
          isAdminLogin ?
            <div className="adminpanel">
              <ConfirmModal />
              <AdminSuccessSnackbar />
              <AdminErrorSnackbar />
              <AdminHeader />
              <div className="adminpanel-maincontent">
                <div className="adminnavbar-wrapper">
                  <AdminNavBar />
                </div>
                <div className="pagecontent-wrapper">
                  <Outlet />
                </div>
              </div>
            </div>
            :
            <div>
              <AdminSuccessSnackbar />
              <AdminErrorSnackbar />
              <Navigate to="/admin/login" />
              {screenWidth >= 1000 ? <LoginPage /> : <ScreenWidthErrorPage />}
            </div>
        }
      >
        <Route path='/' element={<DashboardPage/>} />
        {/* <Route path='login' element={<LoginPage/>} /> */}
        <Route path='products' element={<ProductListPage/>} />
        <Route path='products/new' element={<ProductNewPage/>} />
        <Route path='products/edit/:id' element={<ProductEditPage/>} />
        <Route path='users' element={<UserListPage/>} />
        <Route path='users/:id' element={<UserInfoPage/>} />
        <Route path='promocodes' element={<PromoListPage/>} />
        <Route path='promocodes/new' element={<PromoNewPage/>} />
        <Route path='promocodes/edit/:promo' element={<PromoEditPage/>} />
        <Route path='orders' element={<OrderListPage/>} />
        <Route path='orders/:id' element={<OrderInfoPage/>} />
        <Route path='categories' element={<CategoryListPage/>} />
        <Route
          path="*"
          element={<Navigate to="/admin" replace />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRouter;