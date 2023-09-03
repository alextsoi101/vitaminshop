import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';
import AppRouter from './routes/AppRouter';
import AdminRouter from './routes/AdminRouter';
import AppLoader from './components/loaders/AppLoader';
import { useSelector, useDispatch } from 'react-redux';
import { userCheck, loadUserInfo, loadUserAddress } from './store/userSlice';
import { loadCartProducts, checkLocalCart } from './store/cartSlice';
import './styles/globalstyles/app.scss';

function App() {

  const dispatch = useDispatch();
  const userRole = useSelector(state => state.user.role);
  const userId = useSelector(state => state.user.userId);
  const cartSubTotal = useSelector(state => state.cart.subTotal);
  const isLoading = useSelector(state => state.user.isLoading);
  const isLogin = useSelector(state => state.user.isLogin);

  useEffect(() => {
    dispatch(userCheck())
      .then((data) => {
        if (data.type === 'user/auth/fulfilled') {
          dispatch(loadUserInfo(data.payload.id))
          dispatch(loadUserAddress(data.payload.id))
        }
      })
  }, [])

  useEffect(() => {
    if (isLogin) {
      dispatch(loadCartProducts(userId))
    } else {
      dispatch(checkLocalCart())
    }
  }, [isLogin, userId, cartSubTotal])

  if (isLoading) return <AppLoader />
  return (
    <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
          <AdminRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
