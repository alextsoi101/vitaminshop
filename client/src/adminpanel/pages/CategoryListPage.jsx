import React, { useState, useEffect } from "react";
import { calculatePageCount } from "../../utils/calculatePageCount";
import CategoryList from "../components/common/CategoryList";
import { useSelector, useDispatch } from "react-redux";
import { loadCategories } from "../../store/adminSlice";
import '../styles/pages/categorylistpage.scss';

const CategoryListPage = () => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.admin.categories);

  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    dispatch(loadCategories({
      limit: limit,
      page: page,
    }))
  }, [])

  useEffect(() => {
    if (categories) {
      setPageCount(calculatePageCount(categories.count, limit))
    }
  }, [categories])

  const changeLimit = (newLimit) => {
    dispatch(loadCategories({
      limit: newLimit,
      page: 1,
    }))
  }

  const changePage = (newPage) => {
    dispatch(loadCategories({
      limit: limit,
      page: newPage,
    }))
  }

  return (
    <div className="categorylistpage">
      <div className="page-header">
        <h2>Categories</h2>
      </div>
      <div className="page-main-content">
        <div className="category-list-wrapper">
          {
            categories &&
            <CategoryList 
              categories={categories}
              setPage={setPage}
              setLimit={setLimit}
              pageCount={pageCount}
              changeLimit={changeLimit}
              changePage={changePage}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryListPage;