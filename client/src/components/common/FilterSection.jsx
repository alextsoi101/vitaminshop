import React, { useState } from "react";
import ShopFilterModal from "../modal/ShopFilterModal";
import TuneIcon from '@mui/icons-material/Tune';

const FilterSection = () => {

  const [isShopFilterOpen, setIsShopFilterOpen] = useState(false);

  const openShopFilter = () => {
    setIsShopFilterOpen(true)
  }
  const closeShopFilter = () => {
    setIsShopFilterOpen(false)
  }

  return (
    <>
      <div 
        className="filtersection"
        onClick={openShopFilter}
      >
        <div className="filtericon">
          <TuneIcon 
            sx={{fontSize: '18px'}}
          />
        </div>
        <div className="showfilters-text">
          SHOW FILTERS
        </div>
      </div>
      
      <ShopFilterModal 
        isShopFilterOpen={isShopFilterOpen}
        closeShopFilter={closeShopFilter}
      />
    </>
  )
}

export default FilterSection;