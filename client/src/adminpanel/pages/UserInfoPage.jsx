import React from "react";
import UserOrders from "../components/common/UserOrders";
import UserInfo from "../components/common/UserInfo";

import '../styles/pages/userinfopage.scss';

const UserInfoPage = () => {
  return (
    <div className="userinfopage">
      <div className="page-header">
        <h2>User info</h2>
      </div>
      <div className="page-main-content">
        <div className="usercontent-wrapper">
          <div className="userorders-wrapper">
            <UserOrders />
          </div>
          <div className="userinfo-wrapper">
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage;