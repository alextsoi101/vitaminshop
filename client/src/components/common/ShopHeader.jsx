import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SelectSortBy from '../MUI/SelectSortBy';

const ShopHeader = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const category_id = searchParams.get('category_id');
  const min_price = searchParams.get('min_price');
  const max_price = searchParams.get('max_price');
  const ratings = searchParams.getAll('rating');
  const order = searchParams.get('order');

  const selectSortBy = (sortType) => {
    let params = {}
    params.order = sortType
    if (category_id) {
      params.category_id = category_id
    }
    if (min_price && max_price) {
      params.min_price = min_price
      params.max_price = max_price
    }
    if (ratings) {
      params.rating = ratings
    }

    setSearchParams(params)
  }

  return (
    <div className="shopheader">  
      <h3>Shop</h3>
      <div className="selectsortby">
        <SelectSortBy
          selectSortBy={selectSortBy}
          defaultSort={order}
        />
      </div>
    </div>
  )
}

export default ShopHeader;