import React from "react";
import UserListCard from "../cards/UserListCard";
import AdminPagination from "./AdminPagination";

const UserList = (props) => {

  const handleIdInput = (e) => {
    props.setUserId(e.target.value)
  }

  const handleNameInput = (e) => {
    props.setName(e.target.value)
  }

  const handleEmailInput = (e) => {
    props.setEmail(e.target.value)
  }

  const handleLimitSelect = (e) => {
    props.setLimit(e.target.value)
    props.changeLimit(e.target.value)
  }

  const handlePageChange = (value) => {
    props.setPage(value)
    props.changePage(value)
  }

  return (
    <div className="userlist">
      <table className="userlist-table">
        <thead className="table-header">
          <tr className="table-header-tr">
            <th className="table-header-th th-id">
              <div className="th-content">
                <div className="th-text">
                  Id
                </div>
                <input 
                  className="th-input input-id"
                  type='text'
                  placeholder='Id'
                  onChange={(e) => handleIdInput(e)}
                />
              </div>
            </th>
            <th className="table-header-th th-image">
              <div className="th-content">
              </div>
            </th>
            <th className="table-header-th th-fullname">
              <div className="th-content">
                <div className="th-text">
                  Full Name
                </div>
                <input 
                  className="th-input input-fullname"
                  type='text'
                  placeholder='Full Name'
                  onChange={(e) => handleNameInput(e)}
                />
              </div>
            </th>
            <th className="table-header-th th-email">
              <div className="th-content">
                <div className="th-text">
                  Email
                </div>
                  <input 
                    className="th-input input-email"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => handleEmailInput(e)}
                  />
              </div>
            </th>
            <th className="table-header-th th-created-at">
              <div className="th-content">
                <div className="th-text">
                  Created At
                </div>
              </div>
            </th>
            <th className="table-header-th th-remove">
              <div className="th-content th-content-remove">
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.rows.map(user => 
              <UserListCard 
                key={user.id}
                id={user.id}
                image={user.image}
                firstname={user.firstname}
                lastname={user.lastname}
                email={user.email}
                createdAt={user.createdAt}
              />
            )
          }
        </tbody>
      </table>
      <div className="userlist-pagination">
        <div className="pagination-results-per-page">
          Show
          <select 
            className="select-per-page"
            onChange={(e) => handleLimitSelect(e)}
          >
            <option value={10}>
              10
            </option>
            <option value={15}>
              15
            </option>
            <option value={20}>
              20
            </option>
          </select>
          per page
        </div>
        <div>
          <AdminPagination 
            pageCount={props.pageCount}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default UserList;