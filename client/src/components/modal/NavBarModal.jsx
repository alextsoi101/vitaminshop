import React from 'react';
import NavBarDrawer from '../MUI/NavBarDrawer';
import NavBarMobile from '../common/NavBarMobile';

const NavBarModal = (props) => {

  return (
    <NavBarDrawer
      closeNavBarModal={props.closeNavBarModal}
      isNavBarModalOpen={props.isNavBarModalOpen}
    >
      <div className="navbarmodal">
        <NavBarMobile 
          closeNavBarModal={props.closeNavBarModal}
        />
      </div>
    </NavBarDrawer>
  )
}

export default NavBarModal;