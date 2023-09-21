import React from "react";
import CategoryList from "../components/common/CategoryList";
import '../styles/pages/categorylistpage.scss';

const CategoryListPage = () => {
  return (
    <div className="categorylistpage">
      <div className="page-header">
        <h2>Categories</h2>
      </div>
      <div className="page-main-content">
        <div className="category-list-wrapper">
          <CategoryList />
        </div>
      </div>
    </div>
  )
}

export default CategoryListPage;