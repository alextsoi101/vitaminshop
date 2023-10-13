import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByCategory, fetchTotalCount } from '../api/productsApi';
import { fetchCategories, fetchOneCategory } from '../api/categoryApi';

const initialState = {
  isLoading: false,
  products: [],
  totalCount: 0,
  totalCountAllCategories: 0,
  currentPage: 1,
  totalPages: 10,
  totalResults: 100,
  currentCategory: 'all',
  categoryName: 'All Categories',
  categoryDescription: 'Shop all categories at The Vitamin Shop',
  priceRange: [0, 100],
  priceRangeUI: [0, 100],
  ratingFilter: [1, 2, 3, 4, 5],
  ratingFilterUI: [],
  sortBy: 'default',
  categories: [],
  limit: 9,
  isProductsLoading: false,
  isCategoryLoading: false,
}

export const loadProducts = createAsyncThunk(
  'shop/loadProducts',
  async (arg) => {
    try {
      const response = await fetchProducts(
        arg.page, 
        arg.limit, 
        arg.minPrice, 
        arg.maxPrice, 
        arg.ratings, 
        arg.sortBy
      );
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadProductsByCategory = createAsyncThunk(
  'shop/loadProductsByCategory',
  async (arg) => {
    try {
      const response = await fetchProductsByCategory( 
        arg.categoryId,
        arg.page, 
        arg.limit, 
        arg.minPrice, 
        arg.maxPrice, 
        arg.ratings, 
        arg.sortBy
      );
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadTotalCount = createAsyncThunk(
  'shop/loadTotalCount',
  async () => {
    try {
      const response = await fetchTotalCount();
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadAllCategories = createAsyncThunk(
  'shop/loadAllCategories',
  async () => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadCategory = createAsyncThunk(
  'shop/loadCategory',
  async (arg) => {
    try {
      const response = await fetchOneCategory(arg.categoryId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload
    },
    setCategoryDescription: (state, action) => {
      state.categoryDescription = action.payload
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload
    },
    setPriceRangeUI: (state, action) => {
      state.priceRangeUI = action.payload
    },
    setRatingFilter: (state, action) => {
      state.ratingFilter = action.payload
    },
    setRatingFilterUI: (state, action) => {
      state.ratingFilterUI = action.payload
    },
    setTotalPages: (state, action) => {
      state.currentPage = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
       state.isLoading = true;
       state.isProductsLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload.rows;
        state.totalCount = action.payload.count;
        state.totalResults = action.payload.rows.length;
        state.isLoading = false;
        state.isProductsLoading = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isProductsLoading = false;
      })
      .addCase(loadProductsByCategory.pending, (state) => {
        state.isLoading = true;
        state.isProductsLoading = true;
      })
      .addCase(loadProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload.rows;
        state.totalCount = action.payload.count;
        state.totalResults = action.payload.rows.length;
        state.isLoading = false;
        state.isProductsLoading = false;
      })
      .addCase(loadProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isProductsLoading = false;
      })
      .addCase(loadAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(loadAllCategories.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loadCategory.pending, (state) => {
        state.isLoading = true;
        state.isCategoryLoading = true;
      })
      .addCase(loadCategory.fulfilled, (state, action) => {
        state.categoryName = action.payload.name;
        state.categoryDescription = action.payload.description;
        state.isLoading = false;
        state.isCategoryLoading = false;
      })
      .addCase(loadCategory.rejected, (state) => {
        state.isLoading = false;
        state.isCategoryLoading = false;
      })
      .addCase(loadTotalCount.fulfilled, (state, action) => {
        state.totalCountAllCategories = action.payload;
      })
  },
})

export const { 
  setCurrentCategory,
  setCategoryName,
  setCategoryDescription,
  setPriceRange,
  setPriceRangeUI,
  setRatingFilter,
  setRatingFilterUI,
  setTotalPages, 
  setCurrentPage,
  setSortBy } = shopSlice.actions

export default shopSlice.reducer;
