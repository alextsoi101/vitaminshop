import React from 'react';
import AccountMenuDrawer from "../MUI/AccountMenuDrawer";
import AccountMenu from '../common/AccountMenu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const MyAccountMenuModal = (props) => {

  return (
    <AccountMenuDrawer
      closeAccountMenu={props.closeAccountMenu}
      isAccountMenuOpen={props.isAccountMenuOpen}
    >
      <div className="myaccountmenumodal">
        <div className="myaccountmenumodal-header">
          <h4>
            Your Account
          </h4>
          <button 
            className="close-btn"
            onClick={props.closeAccountMenu}
            >
            <CloseRoundedIcon 
              sx={{fontSize: '27px'}}
            />
          </button>
        </div>
        <div className="account-menu-wrapper">
          <AccountMenu 
            content={props.content}
            setContent={props.setContent}
            closeAccountMenu={props.closeAccountMenu}
          />
        </div>
      </div>
    </AccountMenuDrawer>
  )
}

export default MyAccountMenuModal;