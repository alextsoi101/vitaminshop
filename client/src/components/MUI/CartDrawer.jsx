import React, { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';

const CartDrawer = (props) => {

  const width = window.innerWidth;

  const style = {
    '.MuiDrawer-paper': {
      borderRadius: width < 420 ? '24px 24px 0px 0px' : '0px',
      borderTop: width < 420 ? '1px solid #D2D6DC' : 'none'
    }
  };

  return (
    <div>
      <Fragment>
        <Drawer
          anchor={width < 420 ? 'bottom' : 'right'}
          elevation={1}
          open={props.isCartOpen}
          onClose={props.closeCart}
          transitionDuration={{ enter: 400, exit: 400 }}
          sx={style}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default CartDrawer;