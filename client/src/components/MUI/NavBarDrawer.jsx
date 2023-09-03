import React, { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';

const NavBarDrawer = (props) => {
  return (
    <div>
      <Fragment>
        <Drawer
          anchor='left'
          open={props.isNavBarModalOpen}
          onClose={props.closeNavBarModal}
          transitionDuration={{ enter: 400, exit: 400 }}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default NavBarDrawer;