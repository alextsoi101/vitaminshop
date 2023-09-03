import React, { useState } from "react";
import MyAccountMenuModal from "../modal/MyAccountMenuModal";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const MyAccountHeader = (props) => {

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const openAccountMenu = () => {
    setIsAccountMenuOpen(true)
  }
  const closeAccountMenu = () => {
    setIsAccountMenuOpen(false)
  }

  return (
    <>
      <div className="myaccountheader"
      onClick={openAccountMenu}
      >
        <div className="menuicon">
          <MenuRoundedIcon 
            sx={{fontSize: '21px'}}
          />
        </div>
        <div className="myaccount-text">
          SHOW MENU
        </div>
      </div>
      <MyAccountMenuModal 
        closeAccountMenu={closeAccountMenu}
        isAccountMenuOpen={isAccountMenuOpen}
        content={props.content}
        setContent={props.setContent}
      />
    </>
  )
}

export default MyAccountHeader;