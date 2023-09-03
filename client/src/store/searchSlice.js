import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { search } from '../api/searchApi';

const initialState = {
  searchResults: null,
  isLoading: false,
}

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (text) => {
    try {
      const response = await search(text);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
       state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
  },
})

export const { setSearchResults } = searchSlice.actions

export default searchSlice.reducer;