import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByCategory, fetchReviews } from '../api/productsApi';

const initialState = {
  isLoading: false,
  bestSellersProducts: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  omegaProducts: [],
  recentlyAddedProducts: [],
  reviews: []
}

export const loadBestSellers = createAsyncThunk(
  'home/loadBestSellers',
  async () => {
    try {
      const response = await fetchProducts(1, 3, 0, 1000, [1, 2, 3, 4, 5], 'rating');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadMenProducts = createAsyncThunk(
  'shop/loadMenProducts',
  async () => {
    try {
      const response = await fetchProductsByCategory(1, 1, 4, 0, 1000, [1, 2, 3, 4, 5], 'default');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadWomenProducts = createAsyncThunk(
  'shop/loadWomenProducts',
  async () => {
    try {
      const response = await fetchProductsByCategory(2, 1, 4, 0, 1000, [1, 2, 3, 4, 5], 'default');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadKidsProducts = createAsyncThunk(
  'shop/loadKidsProducts',
  async () => {
    try {
      const response = await fetchProductsByCategory(3, 1, 4, 0, 1000, [1, 2, 3, 4, 5], 'default');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadOmegaProducts = createAsyncThunk(
  'shop/loadOmegaProducts',
  async () => {
    try {
      const response = await fetchProductsByCategory(9, 1, 4, 0, 1000, [1, 2, 3, 4, 5], 'default');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadRecentlyAddedProducts = createAsyncThunk(
  'shop/loadRecentlyAddedProducts',
  async () => {
    try {
      const response = await fetchProducts(1, 4, 0, 1000, [1, 2, 3, 4, 5], 'newest');
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadReviews = createAsyncThunk(
  'shop/loadReviews',
  async (limit) => {
    try {
      const response =  await fetchReviews(limit)
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBestSellers.pending, (state) => {
       state.isLoading = true;
      })
      .addCase(loadBestSellers.fulfilled, (state, action) => {
        state.bestSellersProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadMenProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMenProducts.fulfilled, (state, action) => {
        state.menProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadWomenProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadWomenProducts.fulfilled, (state, action) => {
        state.womenProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadKidsProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadKidsProducts.fulfilled, (state, action) => {
        state.kidsProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadOmegaProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOmegaProducts.fulfilled, (state, action) => {
        state.omegaProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadRecentlyAddedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadRecentlyAddedProducts.fulfilled, (state, action) => {
        state.recentlyAddedProducts = action.payload.rows;
        state.isLoading = false;
      })
      .addCase(loadReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
  },
})

export default homeSlice.reducer;