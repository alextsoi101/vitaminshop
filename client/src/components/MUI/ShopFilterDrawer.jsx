import React, { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';

const ShopFilterDrawer = (props) => {
  return (
    <div>
      <Fragment>
        <Drawer
          anchor='left'
          open={props.isShopFilterOpen}
          onClose={props.closeShopFilter}
          transitionDuration={{ enter: 400, exit: 400 }}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default ShopFilterDrawer;