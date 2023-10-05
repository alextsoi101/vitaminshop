import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserOrders from "../components/common/UserOrders";
import UserInfo from "../components/common/UserInfo";
import { useSelector, useDispatch } from "react-redux";
import { loadUserInfo, loadUserOrders } from "../../store/adminSlice";
import '../styles/pages/userinfopage.scss';

const UserInfoPage = () => {

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.admin.userInfo);
  const userOrders = useSelector(state => state.admin.userOrders); 

  const {id} = useParams();

  useEffect(() => {
    dispatch(loadUserInfo(id))
    dispatch(loadUserOrders(id))
  }, [])

  return (
    <div className="userinfopage">
      <div className="page-header">
        <h2>User info <span>#{id}</span></h2>
      </div>
      <div className="page-main-content">
        <div className="usercontent-wrapper">
          <div className="userorders-wrapper">
            {
              userOrders &&
              <UserOrders 
                userOrders={userOrders}
              />
            }
          </div>
          <div className="userinfo-wrapper">
            {
              userInfo &&
              <UserInfo 
                firstname={userInfo.firstname}
                lastname={userInfo.lastname}
                role={userInfo.role}
                email={userInfo.email}
                createdAt={userInfo.createdAt}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage;