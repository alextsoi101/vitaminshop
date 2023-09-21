import React from "react";
import UserList from "../components/common/UserList";
import '../styles/pages/userlistpage.scss';

const UserListPage = () => {
  return (
    <div className="userlistpage">
      <div className="page-header">
        <h2>Users</h2>
      </div>
      <div className="page-main-content">
        <div className="user-list-wrapper">
          <UserList />
        </div>
      </div>
    </div>
  )
}

export default UserListPage;