import React, { useEffect, useState } from "react";
import { calculatePageCount } from "../../utils/calculatePageCount";
import UserList from "../components/common/UserList";
import '../styles/pages/userlistpage.scss';
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../store/adminSlice";

const UserListPage = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.users);

  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    dispatch(loadUsers({
      userId: userId,
      name: name,
      email: email,
      limit: limit,
      page: page
    }))
  }, [])

  useEffect(() => {
    if (users) {
      setPageCount(calculatePageCount(users.count, limit))
    }
  }, [users])

  const changeLimit = (newLimit) => {
    dispatch(loadUsers({
      userId: userId,
      name: name,
      email: email,
      limit: newLimit,
      page: 1
    }))
  }

  const changePage = (newPage) => {
    dispatch(loadUsers({
      userId: userId,
      name: name,
      email: email,
      limit: limit,
      page: newPage
    }))
  }

  const handleApply = () => {
    dispatch(loadUsers({
      userId: userId,
      name: name,
      email: email,
      limit: limit,
      page: 1
    }))
  }

  return (
    <div className="userlistpage">
      <div className="page-header">
        <h2>Users</h2>
        <div className="header-button-section">
          <button 
            className="apply-button"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="user-list-wrapper">
          {
            users &&
            <UserList 
              users={users}
              setUserId={setUserId}
              setName={setName}
              setEmail={setEmail}
              setLimit={setLimit}
              setPage={setPage}
              pageCount={pageCount}
              page={page}
              changeLimit={changeLimit}
              changePage={changePage}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default UserListPage;