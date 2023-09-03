import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkPromo, fetchPromo } from '../api/promoApi';

const initialState = {
  sectionPromo: null,
  info: null,
  promocode: null,
  percentDiscount: 0,
  expirationDate: null,
  promoError: null,
  isCheckPromoLoading: false,
  isSectionPromoLoading: false,
}

export const checkPromocode = createAsyncThunk(
  'promo/check',
  async (arg) => {
    try {
      const response = await checkPromo(arg.userId, arg.promocode);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadPromo = createAsyncThunk(
  'promo/loadPromo',
  async (promocode) => {
    try {
      const response = await fetchPromo(promocode);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    setProductId: (state, action) => {
      state.productId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkPromocode.pending, (state) => {
        state.isCheckPromoLoading = true;
      })
      .addCase(checkPromocode.fulfilled, (state, action) => {
        state.promocode = action.payload.promocode;
        state.percentDiscount = action.payload.percentDiscount;
        state.promoError = null;
        state.isCheckPromoLoading = false;
      })
      .addCase(checkPromocode.rejected, (state, action) => {
        state.promoError = action.error.message;
        state.percentDiscount = 0;
        state.isCheckPromoLoading = false;
      })
      .addCase(loadPromo.pending, (state) => {
        state.isSectionPromoLoading = true;
      })
      .addCase(loadPromo.fulfilled, (state, action) => {
        state.sectionPromo = action.payload;
        state.isSectionPromoLoading = false;
      })
      .addCase(loadPromo.rejected, (state, action) => {
        state.isSectionPromoLoading = false;
      })
  },
})

export default promoSlice.reducer;