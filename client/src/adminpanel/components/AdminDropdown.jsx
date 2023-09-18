import React from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminDropdown = () => {
  return (
    <div className="admindropdown">

      <div className="admindropdown-toggle">
        <div className="text-admin">
          DEMO ADMIN
        </div>
        <div className="admin-logo">
          <AdminPanelSettingsIcon fontSize='medium' />
        </div>
      </div>

      <div className="admindropdown-menu">
        <div className="hello-text">
          Hello, Admin!
        </div>
        <div className="main-text">
          You are using <br/>
          <span className="span-test-admin">Demo Admin Account.</span><br/>
          <div className="span-only-view">You cannot make any changes.</div>
        </div>
        <div className="logout-btn">
          <button className="logout-btn">
            Logout
          </button>
        </div>
      </div>

    </div>
  )
}

export default AdminDropdown;