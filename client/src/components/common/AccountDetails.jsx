import React from 'react';
import AccountForm from '../forms/AccountForm';
import ChangePasswordForm from '../forms/ChangePasswordForm';

const AccountDetails = () => {
  return (
    <div className="accountdetails">
      <AccountForm />
      <ChangePasswordForm />
    </div>
  )
}

export default AccountDetails;