import React, { useEffect } from 'react';
import MainSection from '../layout/MainSection';
import Benefits from '../layout/Benefits';
import BestSellers from '../layout/BestSellers';
import Reviews from '../layout/Reviews';
import ChooseVitamins from '../layout/ChooseVitamins';
import HowOrder from '../layout/HowOrder';
import Advantages from '../layout/Advantages';
import RecentlyAdded from '../layout/RecentlyAdded';
import Categories from '../layout/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { 
  loadBestSellers,
  loadMenProducts,
  loadWomenProducts,
  loadKidsProducts,
  loadOmegaProducts,
  loadRecentlyAddedProducts,
  loadReviews } from '../store/homeSlice';
import '../styles/pages/homepage.scss';

const HomePage = () => {

  const dispatch = useDispatch();
  const bestSellersProducts = useSelector(state => state.home.bestSellersProducts)
  const menProducts = useSelector(state => state.home.menProducts)
  const womenProducts = useSelector(state => state.home.womenProducts)
  const kidsProducts = useSelector(state => state.home.kidsProducts)
  const omegaProducts = useSelector(state => state.home.omegaProducts)
  const recentlyAddedProducts = useSelector(state => state.home.recentlyAddedProducts)
  const reviews = useSelector(state => state.home.reviews)

  const reviewsIsLoading = useSelector(state => state.home.isLoading);

  useEffect(() => {
    dispatch(loadBestSellers())
    dispatch(loadMenProducts())
    dispatch(loadWomenProducts())
    dispatch(loadKidsProducts())
    dispatch(loadOmegaProducts())
    dispatch(loadRecentlyAddedProducts())
    dispatch(loadReviews(9))
  }, [])

  return (
    <div className="homepage">
      <MainSection />
      <Benefits />
      <BestSellers 
        bestSellersProducts={bestSellersProducts} 
      />
      
      {reviewsIsLoading ? <div></div> : 
        <Reviews 
          reviews={reviews}
        />
      }
      
      <ChooseVitamins 
        menProducts={menProducts}
        womenProducts={womenProducts}
        kidsProducts={kidsProducts}
        omegaProducts={omegaProducts}
      />
      <HowOrder />
      <Advantages />
      <RecentlyAdded 
        recentlyAddedProducts={recentlyAddedProducts}
      />
      <Categories />
    </div>
  )
}

export default HomePage;