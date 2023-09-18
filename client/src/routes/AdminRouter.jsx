import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AdminHeader from '../adminpanel/layout/AdminHeader';
import AdminNavBar from '../adminpanel/layout/AdminNavBar';
import DashboardPage from '../adminpanel/pages/DashboardPage';
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
        <Route
          path="*"
          element={<Navigate to="/admin" replace />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRouter;