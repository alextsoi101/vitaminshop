import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder, createOrderNoAuth, fetchAllOrders } from '../api/orderApi';

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  country: null,
  addressLineOne: null,
  addressLineTwo: null,
  city: null,
  state: null,
  zip: null,
  phone: null,
  notes: null,
  shippingCost: 50,
  isLoading: false,
  isPlaceOrderLoading: false,
  orderedProducts: [],
  placeOrderError: null,
  userOrders: [],
}

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (arg) => {
    try {
      const response = await createOrder(
        arg.userId,
        arg.email, 
        arg.firstName, 
        arg.lastName, 
        arg.country, 
        arg.addressLineOne, 
        arg.addressLineTwo, 
        arg.city,
        arg.state,
        arg.zip,
        arg.phone,
        arg.notes,
        arg.shippingCost,
        arg.total
      );
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const placeOrderNoAuth = createAsyncThunk(
  'order/placeOrderNoAuth',
  async (arg) => {
    try {
      const response = await createOrderNoAuth(
        arg.email, 
        arg.firstName, 
        arg.lastName, 
        arg.country, 
        arg.addressLineOne, 
        arg.addressLineTwo, 
        arg.city,
        arg.state,
        arg.zip,
        arg.phone,
        arg.notes,
        arg.orderedProducts,
        arg.shippingCost,
        arg.total
      );
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadUserOrders = createAsyncThunk(
  'order/loadUserOrders',
  async (userId) => {
    try {
      const response = await fetchAllOrders(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderEmail: (state, action) => {
      state.email = action.payload
    },
    setOrderFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setOrderLastName: (state, action) => {
      state.lastName = action.payload
    },
    setOrderCountry: (state, action) => {
      state.country = action.payload
    },
    setOrderAddressLineOne: (state, action) => {
      state.addressLineOne = action.payload
    },
    setOrderAddressLineTwo: (state, action) => {
      state.addressLineTwo = action.payload
    },
    setOrderCity: (state, action) => {
      state.city = action.payload
    },
    setOrderState: (state, action) => {
      state.state = action.payload
    },
    setOrderZip: (state, action) => {
      state.zip = action.payload
    },
    setOrderPhone: (state, action) => {
      state.phone = action.payload
    },
    setOrderNotes: (state, action) => {
      state.notes = action.payload
    },
    setOrderTotal: (state, action) => {
      state.total = action.payload
    },
    setPlaceOrderError: (state, action) => {
      state.placeOrderError = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
       state.isLoading = true;
       state.isPlaceOrderLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.country = action.payload.country;
        state.addressLineOne = action.payload.addressLineOne;
        state.addressLineTwo = action.payload.addressLineTwo;
        state.city = action.payload.city;
        state.state = action.payload.state;
        state.zip = action.payload.zip;
        state.phone = action.payload.phone;
        state.notes = action.payload.notes;
        state.orderedProducts = action.payload.orderedProducts;
        state.shippingCost = action.payload.shippingCost;
        state.total = action.payload.total;
        state.isLoading = false;
        state.isPlaceOrderLoading = false;
        state.placeOrderError = null;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isPlaceOrderLoading = false;
        state.placeOrderError = action.error.message
      })
      .addCase(placeOrderNoAuth.pending, (state) => {
        state.isLoading = true;
        state.isPlaceOrderLoading = true;
      })
      .addCase(placeOrderNoAuth.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.country = action.payload.country;
        state.addressLineOne = action.payload.addressLineOne;
        state.addressLineTwo = action.payload.addressLineTwo;
        state.city = action.payload.city;
        state.state = action.payload.state;
        state.zip = action.payload.zip;
        state.phone = action.payload.phone;
        state.notes = action.payload.notes;
        state.orderedProducts = action.payload.orderedProducts;
        state.shippingCost = action.payload.shippingCost;
        state.total = action.payload.total;
        state.isLoading = false;
        state.isPlaceOrderLoading = false;
      })
      .addCase(placeOrderNoAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isPlaceOrderLoading = false;
        state.placeOrderError = action.error.message
      })
      .addCase(loadUserOrders.fulfilled, (state, action) => {
        state.userOrders = action.payload
      })
  },
})

export const { 
  setOrderEmail,
  setOrderFirstName,
  setOrderLastName,
  setOrderCountry,
  setOrderAddressLineOne,
  setOrderAddressLineTwo,
  setOrderCity,
  setOrderState,
  setOrderZip,
  setOrderPhone,
  setOrderNotes,
  setOrderTotal,
  setPlaceOrderError,
 } = orderSlice.actions

export default orderSlice.reducer;
