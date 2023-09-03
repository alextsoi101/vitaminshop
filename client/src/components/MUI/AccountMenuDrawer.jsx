import React, { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';

const AccountMenuDrawer = (props) => {
  return (
    <div>
      <Fragment>
        <Drawer
          anchor='left'
          open={props.isAccountMenuOpen}
          onClose={props.closeAccountMenu}
          transitionDuration={{ enter: 400, exit: 400 }}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default AccountMenuDrawer;