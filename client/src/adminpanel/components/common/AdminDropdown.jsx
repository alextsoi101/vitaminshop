import React from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useSelector, useDispatch } from "react-redux";
import { adminLogout, adminLoginCheck } from "../../../store/adminSlice";

const AdminDropdown = () => {

  const dispatch = useDispatch()
  const adminInfo = useSelector(state => state.admin.adminInfo);

  const onClickLogout = () => {
    dispatch(adminLogout())
    dispatch(adminLoginCheck())
  }

  if (!adminInfo) return ''
  return (
    <div className="admindropdown">

      <div className="admindropdown-toggle">
        <div className="text-admin">
          {adminInfo.role === 'TESTADMIN' ? 'DEMO ADMIN' : 'ADMIN'}
        </div>
        <div className="admin-logo">
          <AdminPanelSettingsIcon fontSize='medium' />
        </div>
      </div>

      <div className="admindropdown-menu">
        <div className="hello-text">
          Hello, Admin!
        </div>
        {
          adminInfo.role === 'TESTADMIN' &&
          <div className="main-text">
            You are using <br/>
            <span className="span-test-admin">Demo Admin Account.</span><br/>
            <div className="span-only-view">You cannot make any changes.</div>
          </div>
        }
        <div className="logout-btn">
          <button 
            className="logout-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>

    </div>
  )
}

export default AdminDropdown;