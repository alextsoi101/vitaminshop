import React from 'react';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import AuthModal from '../components/modal/AuthModal';
import SuccessSnackbar from '../components/modal/SuccessSnackbar';
import ErrorSnackbar from '../components/modal/ErrorSnackbar';
import Promo from '../layout/Promo';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderCompletePage from '../pages/OrderCompletePage';
import MyAccountPage from '../pages/MyAccountPage';
import ErrorPage from '../pages/ErrorPage';
import { useSelector } from 'react-redux';

const UserRouter = () => {

  const isLogin = useSelector(state => state.user.isLogin);

  return (
    <Routes>
      <Route
        element={
          <>
            <AuthModal />
            <SuccessSnackbar />
            <ErrorSnackbar />
            <Promo />
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/ordercomplete' element={<OrderCompletePage/>} />
        <Route path='/myaccount' element={isLogin ? <MyAccountPage/> : <Navigate to="/shop"/> } />
        <Route path='/error' element={<ErrorPage/>} />
        <Route
          path='*'
          element={<Navigate to='/' replace />}
        />
      </Route>
    </Routes>
  );
};

export default UserRouter;