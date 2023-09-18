import React from 'react';
import AdminDropdown from '../components/common/AdminDropdown';
import logo from '../../assets/images/logo.png'

const AdminHeader = () => {
  return (
    <header className="adminheader">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="admin-dropdown-wrapper">
        <AdminDropdown />
      </div>
    </header>
  )
}

export default AdminHeader;