import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import homeSlice from './homeSlice';
import shopSlice from './shopSlice';
import productSlice from './productSlice';
import userSlice from './userSlice';
import cartSlice from './cartSlice';
import orderSlice from './orderSlice';
import promoSlice from './promoSlice';
import searchSlice from './searchSlice';

export default configureStore({
  reducer: {
    modal: modalSlice,
    home: homeSlice,
    user: userSlice,
    shop: shopSlice,
    product: productSlice,
    cart: cartSlice,
    order: orderSlice,
    promo: promoSlice,
    search: searchSlice
  }
})