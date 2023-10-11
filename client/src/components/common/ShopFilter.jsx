import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterByPrice from '../forms/FilterByPrice';
import FilterByCategory from '../forms/FilterByCategory';
import FilterByRating from '../forms/FilterByRating';
import { useDispatch } from 'react-redux';
import { 
  setCurrentCategory,
  setPriceRange,
  setRatingFilter } from '../../store/shopSlice';

const ShopFilter = (props) => {

  const dispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams();
  const category_id = searchParams.get('category_id');
  const min_price = Number(searchParams.get('min_price'));
  const max_price = Number(searchParams.get('max_price'));
  const ratings = searchParams.getAll('rating').map(Number);
  const order = searchParams.get('order');

  const [checkedRatings, setCheckedRatings] = useState(ratings || []);
  const [priceRangeUI, setPriceRangeUI] = useState([min_price || 0, max_price || 100]);

  const chooseCategory = (categoryId) => {
    let params = {}
    params.category_id = categoryId
    if (order) {
      params.order = order
    }
    if (min_price && max_price) {
      params.min_price = min_price
      params.max_price = max_price
    }
    if (ratings) {
      params.rating = ratings
    }

    setSearchParams(params)
    dispatch(setCurrentCategory(categoryId))

    if (props.closeShopFilter) {
      props.closeShopFilter()
    }
  }

  const choosePriceRange = (minPrice, maxPrice) => {
    let params = {}
    if (category_id) {
      params.category_id = category_id
    }
    if (order) {
      params.order = order
    }
    params.min_price = minPrice
    params.max_price = maxPrice
    if (ratings) {
      params.rating = ratings
    }

    setSearchParams(params)
    dispatch(setPriceRange([minPrice, maxPrice]))

    if (props.closeShopFilter) {
      props.closeShopFilter()
    }
  }
  
  const chooseRatingFilter = (rate) => {
    let params = {}
    if (category_id) {
      params.category_id = category_id
    }
    if (order) {
      params.order = order
    }
    if (min_price && max_price) {
      params.min_price = min_price
      params.max_price = max_price
    }
    params.rating = rate

    setSearchParams(params)
    dispatch(setRatingFilter(rate))

    if (props.closeShopFilter) {
      props.closeShopFilter()
    }
  }

  const clearFilters = () => {
    let params = {}
    if (order) {
      params.order = order
    }
    setSearchParams(params)
    setPriceRangeUI([0, 100])
    setCheckedRatings([])
  }

  return (
    <div className="shopfilter">
      <div className="text-filters">Filters</div>
      <div className="forms-container">
        <hr />
        <FilterByCategory 
          chooseCategory={chooseCategory}
        />
        <hr />
        <FilterByPrice 
          choosePriceRange={choosePriceRange}
          priceRangeUI={priceRangeUI}
          setPriceRangeUI={setPriceRangeUI}

        />
        <hr />
        <FilterByRating 
          chooseRatingFilter={chooseRatingFilter}
          checkedRatings={checkedRatings}
          setCheckedRatings={setCheckedRatings}
        />
        <hr />
        <button 
          className="btn-clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default ShopFilter;
