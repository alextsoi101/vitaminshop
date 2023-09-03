import React from 'react';
import ShopFilterDrawer from '../MUI/ShopFilterDrawer';
import ShopFilter from '../common/ShopFilter';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ShopFilterModal = (props) => {

  return (
    <ShopFilterDrawer
      closeShopFilter={props.closeShopFilter}
      isShopFilterOpen={props.isShopFilterOpen}
    >
      <div className="shopfiltermodal">
          <button 
            className="close-btn"
            onClick={props.closeShopFilter}
          >
            <CloseRoundedIcon 
              sx={{fontSize: '30px'}}
            />
          </button>
        <ShopFilter 
          closeShopFilter={props.closeShopFilter}
        />
      </div>
    </ShopFilterDrawer>
  )
}

export default ShopFilterModal;