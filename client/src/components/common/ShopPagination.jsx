import React from 'react';
import PagePagination from '../MUI/PagePagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/shopSlice';

const ShopPagination = (props) => {

  const dispatch = useDispatch();

  const page = useSelector(state => state.shop.currentPage);
  const totalResults = useSelector(state => state.shop.totalCount);

  const handleChange = (event, value) => {
    dispatch(setCurrentPage(value))
    props.fetchByPage(value)
  }

  return (
    <div className="shop-pagination">
      <div className="pagination-info">Showing {page}-12 of <span>{totalResults}</span> results</div>
      <div className="pagination-wrapper">
        <PagePagination 
          page={page}
          handleChange={handleChange}
          totalPages={props.totalPages}
        />
      </div>
    </div>
  )
} 

export default ShopPagination;
