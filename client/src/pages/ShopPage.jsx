import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ShopBenefits from '../components/common/ShopBenefits';
import FilterSection from '../components/common/FilterSection';
import ShopFilter from '../components/common/ShopFilter';
import ShopHeader from '../components/common/ShopHeader';
import ShopCategory from '../components/common/ShopCategory';
import ShopGallery from '../components/common/ShopGallery';
import ShopPagination from '../components/common/ShopPagination';
import ShopGalleryLoader from '../components/loaders/ShopGalleryLoader';
import ShopCategoryLoader from '../components/loaders/ShopCategoryLoader';
import { 
  loadProducts, 
  loadTotalCount,
  loadProductsByCategory,
  loadAllCategories,
  loadCategory,
  setTotalPages,
  setCurrentPage,
  setCategoryName,
  setCategoryDescription } from '../store/shopSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/pages/shoppage.scss';

const ShopPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const products = useSelector(state => state.shop.products);
  const totalCount = useSelector(state => state.shop.totalCount);
  const totalPages = useSelector(state => state.shop.totalCount);
  const categoryName = useSelector(state => state.shop.categoryName);
  const categoryDescription = useSelector(state => state.shop.categoryDescription);
  const isProductsLoading = useSelector(state => state.shop.isProductsLoading);
  const isCategoryLoading = useSelector(state => state.shop.isCategoryLoading);

  const categoryId = searchParams.get('category_id') || 'all';
  const minPrice = Number(searchParams.get('min_price')) || 0;
  const maxPrice = Number(searchParams.get('max_price')) || 1000;
  const ratings = searchParams.getAll('rating').map(Number) || [1, 2, 3, 4, 5];
  const stringrating = ratings.toString()
  const sortBy = searchParams.get('order') || 'default';
  const limit = 9;

  useEffect(() => {
    dispatch(loadAllCategories())
    dispatch(loadTotalCount())
  }, [])

  useEffect(() => {
    if (categoryId === 'all') {
      dispatch(loadProducts({page: 1, limit, minPrice, maxPrice, ratings, sortBy}))
        .then((data) => {
          if (data.type === 'shop/loadProducts/rejected') {
            navigate('/error')
          }
        })
      dispatch(setCategoryName('All categories'))
      dispatch(setCategoryDescription('Shop all categories at The Vitamin Shop'))
      dispatch(setTotalPages(Math.floor(totalCount / limit)))
      dispatch(setCurrentPage(1))
    }
    else {
      dispatch(loadProductsByCategory({categoryId, page: 1, limit, minPrice, maxPrice, ratings, sortBy}))
        .then((data) => {
          if (data.type === 'shop/loadProductsByCategory/rejected') {
            navigate('/error')
          }
        })
      dispatch(loadCategory({categoryId}))
      dispatch(setTotalPages(Math.floor(totalCount / limit)))
      dispatch(setCurrentPage(1))
    }
  }, [categoryId, minPrice, maxPrice, sortBy, stringrating])

  const fetchByPage = (page) => {
    if (categoryId === 'all') {
      dispatch(loadProducts({page: page, limit, minPrice, maxPrice, ratings, sortBy}))
    }
    else {
      dispatch(loadProductsByCategory({categoryId, page, limit, minPrice, maxPrice, ratings, sortBy}))
    }
  }

  return (
    <div className="shoppage">
      <ShopBenefits />
      <div className="shop-content-wrapper">

        <div className="shop-filter">
          <ShopFilter />
        </div>
        <div className="shop">
          <ShopHeader />
          <FilterSection />
          <div className="shop-maincontent">
            { isCategoryLoading ? <ShopCategoryLoader /> :
              <ShopCategory 
                name={categoryName.toUpperCase()}
                description={categoryDescription}
              />
            }
            <ShopPagination 
              fetchByPage={fetchByPage}
              totalPages={totalPages}
            />
            { isProductsLoading ? <ShopGalleryLoader limit={9} /> :
              <ShopGallery 
                products={products}
              />
            }
            <ShopPagination 
              fetchByPage={fetchByPage}
              totalPages={totalPages}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopPage;