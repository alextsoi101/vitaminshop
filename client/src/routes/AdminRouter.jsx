import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AdminHeader from '../adminpanel/layout/AdminHeader';
import AdminNavBar from '../adminpanel/layout/AdminNavBar';
import DashboardPage from '../adminpanel/pages/DashboardPage';
import ProductListPage from '../adminpanel/pages/ProductListPage';
import ProductNewPage from '../adminpanel/pages/ProductNewPage';
import ProductEditPage from '../adminpanel/pages/ProductEditPage';
import UserListPage from '../adminpanel/pages/UserListPage';
import PromoListPage from '../adminpanel/pages/PromoListPage';
import PromoNewPage from '../adminpanel/pages/PromoNewPage';
import PromoEditPage from '../adminpanel/pages/PromoEditPage';
import OrderListPage from '../adminpanel/pages/OrderListPage';
import CategoryListPage from '../adminpanel/pages/CategoryListPage';
import '../adminpanel/styles/globalstyles/adminpanel.scss';

const AdminRouter = () => {
  
  return (
    <Routes>
      <Route
        element={
          <div className="adminpanel">
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
        }
      >
        <Route path='/' element={<DashboardPage/>} />
        <Route path='products' element={<ProductListPage/>} />
        <Route path='products/new' element={<ProductNewPage/>} />
        <Route path='products/edit/:id' element={<ProductEditPage/>} />
        <Route path='users' element={<UserListPage/>} />
        <Route path='promocodes' element={<PromoListPage/>} />
        <Route path='promocodes/new' element={<PromoNewPage/>} />
        <Route path='promocodes/edit/:id' element={<PromoEditPage/>} />
        <Route path='orders' element={<OrderListPage/>} />
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