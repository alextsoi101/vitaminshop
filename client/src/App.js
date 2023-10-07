import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';
import AppRouter from './routes/AppRouter';
import AppLoader from './components/loaders/AppLoader';
import { useSelector, useDispatch } from 'react-redux';
import { userCheck, loadUserInfo, loadUserAddress } from './store/userSlice';
import { adminLoginCheck } from './store/adminSlice';
import { loadCartProducts, checkLocalCart } from './store/cartSlice';
import './styles/globalstyles/app.scss';

function App() {

  const dispatch = useDispatch();
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

    dispatch(adminLoginCheck())
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
        </BrowserRouter>
    </div>
  );
}

export default App;
