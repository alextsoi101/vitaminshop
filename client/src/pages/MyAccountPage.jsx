import React, { useState, useEffect } from 'react';
import AccountMenu from '../components/common/AccountMenu';
import MyAccountHeader from '../components/common/MyAccountHeader';
import AccountDetails from '../components/common/AccountDetails';
import AccountOrders from '../components/common/AccountOrders';
import AccountAddresses from '../components/common/AccountAddresses';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserOrders } from '../store/orderSlice';
import '../styles/pages/myaccountpage.scss';

const MyAccountPage = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);

  useEffect(() => {
    dispatch(loadUserOrders(userId))
  }, [])

  const [content, setContent] = useState('account');

  return (
    <div className="myaccountpage">
      <div className="myaccount-h2">
        <h2>My Account</h2>
      </div>
      <MyAccountHeader
        content={content}
        setContent={setContent}
      />
      <div className="main-content">
        <div className="accountmenu-wrapper">
          <AccountMenu 
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="content">
          { content === 'account' && <AccountDetails /> }
          { content === 'orders' && <AccountOrders /> }
          { content === 'addresses' && <AccountAddresses /> }
        </div>
      </div>
    </div>
  )
}

export default MyAccountPage;