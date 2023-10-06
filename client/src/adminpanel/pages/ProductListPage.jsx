import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { calculatePageCount } from "../../utils/calculatePageCount";
import ProductList from "../components/common/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/adminSlice";
import '../styles/pages/productlistpage.scss';

const ProductListPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.admin.products);

  const [categoryId, setCategoryId] = useState(null);
  const [name, setName] = useState(null);
  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(10);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);
  const [inStock, setInStock] = useState(null);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    dispatch(loadProducts({
      categoryId: null,
      name: null,
      page: 1,
      limit: 10,
      minPrice: 0,
      maxPrice: 1000,
      inStock: null
    }))
  }, [])

  useEffect(() => {
    if (products) {
      setPageCount(calculatePageCount(products.count, limit))
    }
  }, [products])

  const changeLimit = (newLimit) => {
    dispatch(loadProducts({
      categoryId: categoryId,
      name: name,
      page: 1,
      limit: newLimit,
      minPrice: minPrice,
      maxPrice: maxPrice,
      inStock: inStock
    }))
  }

  const changePage = (newPage) => {
    dispatch(loadProducts({
      categoryId: categoryId,
      name: name,
      page: newPage,
      limit: limit,
      minPrice: minPrice,
      maxPrice: maxPrice,
      inStock: inStock
    }))
  }

  const handleApply = () => {
    dispatch(loadProducts({
      categoryId: categoryId,
      name: name,
      page: 1,
      limit: limit,
      minPrice: minPrice,
      maxPrice: maxPrice,
      inStock: inStock
    }))
  }

  const clickNewProduct = () => {
    navigate('new')
  }

  return (
    <div className="productlistpage">
      <div className="page-header">
        <h2>Products</h2>
        <div className="header-button-section">
          <button 
            className="apply-button"
            onClick={handleApply}
          >
            Apply
          </button>
          <button 
            className="newproduct-button"
            onClick={clickNewProduct}
          >
            New Product
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="product-list-wrapper">
          {
            products &&
            <ProductList
              products={products}
              setCategoryId={setCategoryId}
              setName={setName}
              setPage={setPage}
              setLimit={setLimit}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setInStock={setInStock}
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

export default ProductListPage;