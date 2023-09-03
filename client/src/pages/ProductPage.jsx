import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductImages from '../components/common/ProductImages';
import ProductMainInfo from '../components/common/ProductMainInfo';
import ProductEffects from '../components/common/ProductEffects';
import ProductShortDescription from '../components/common/ProductShortDescription';
import ProductSizes from '../components/common/ProductSizes';
import ProductAdd from '../components/common/ProductAdd';
import ProductInfoReviews from '../layout/ProductInfoReviews';
import FeaturedProducts from '../components/common/FeaturedProducts';
import { loadOneProduct, loadProductReviews, loadFeaturedProducts } from '../store/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/pages/productpage.scss';

const ProductPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reviewsCount = useSelector(state => state.product.reviewsCount);
  const featuredProducts = useSelector(state => state.product.featuredProducts);
  const {id} = useParams();

  useEffect(() => {
    dispatch(loadOneProduct(id))
      .then((data) => {
        if (data.type === 'product/loadOneProduct/rejected') {
          navigate('/error')
        }
      })
    dispatch(loadProductReviews(id))
      .then((data) => {
        if (data.type === 'product/loadProductReviews/rejected') {
          navigate('/error')
        }
      })
  }, [reviewsCount])

  useEffect(() => {
    dispatch(loadFeaturedProducts());
  }, [])

  return (
    <div className="productpage">
      <div className="product-content">
        <div className="product-images">
          <ProductImages />
        </div>
        <div className="product-info">
          <ProductMainInfo />
          <ProductEffects />
          <ProductShortDescription />
          <ProductSizes />
          <ProductAdd />
        </div>
      </div>
      <div className="product-description-reviews">
        <ProductInfoReviews />
      </div>
      <div className="featured-products">
        <FeaturedProducts 
          featuredProducts={featuredProducts}
        />
      </div>
    </div>
  )
}

export default ProductPage;