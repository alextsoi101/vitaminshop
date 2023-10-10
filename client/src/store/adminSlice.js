import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  adminLogin,
  adminCheck,
  fetchOrderStatistic,
  fetchSaleStatistic,
  fetchLifetimeOrders,
  fetchLifetimeSales,
  fetchUserStatistic,
  fetchUsers,
  fetchUserInfo,
  fetchUserOrders,
  fetchOrders,
  fetchOrderInfo,
  fetchProducts,
  fetchProductInfo,
  createProduct,
  updateProduct,
  removeProduct,
  fetchPromocodes,
  fetchPromocodeInfo,
  createPromocode,
  updatePromocode,
  fetchCategories } from '../api/adminApi';

const initialState = {
  isAdminLogin: false,
  adminInfo: null,
  orderStatistic: [],
  saleStatistic: [],
  lifetimeOrders: null,
  lifetimeSales: null,
  userStatistic: [],
  users: null,
  userInfo: null,
  userOrders: null,
  orders: null,
  orderInfo: null,
  products: null,
  productInfo: null,
  promocodes: null,
  promocodeInfo: null,
  categories: null,
  errorMessage: null,

  //Loadings:
  isAdminLoginLoading: false,
  isAdminLoginCheckLoading: false,
  isOrderStatisticLoading: true,
  isSaleStatisticLoading: true,
  isLifetimeOrdersLoading: true,
  isLifetimeSalesLoading: true,
  isUserStatisticLoading: false,
  isUsersLoading: false,
  isUserInfoLoading: false,
  isUserOrdersLoading: false,
  isOrdersLoading: false,
  isOrderInfoLoading: false,
  isProductsLoading: false,
  isProductInfoLoading: false,
  isAddNewProductLoading: false,
  isEditProductLoading: false,
  isPromocodesLoading: false,
  isPromocodeInfoLoading: false,
  isAddNewPromocodeLoading: false,
  isEditPromocodeLoading: false,
  isCategoriesLoading: false,
}

export const adminSignIn = createAsyncThunk(
  'admin/adminSignIn',
  async (arg) => {
    try {
      const response = await adminLogin(arg.email, arg.password);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const adminLoginCheck = createAsyncThunk(
  'admin/adminLoginCheck',
  async () => {
    try {
      const response = await adminCheck();
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const adminLogout = createAsyncThunk(
  'admin/adminLogout',
  async () => {
    localStorage.removeItem('adminToken');
  }
)

export const loadOrderStatistic = createAsyncThunk(
  'admin/loadOrderStatistic',
  async (arg) => {
    try {
      const response = await fetchOrderStatistic(arg.startDate, arg.lastDate);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadSaleStatistic = createAsyncThunk(
  'admin/loadSalesStatistic',
  async (arg) => {
    try {
      const response = await fetchSaleStatistic(arg.startDate, arg.lastDate);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadLifetimeOrders = createAsyncThunk(
  'admin/loadLifetimeOrders',
  async () => {
    try {
      const response = await fetchLifetimeOrders();
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadLifetimeSales = createAsyncThunk(
  'admin/loadLifetimeSales',
  async () => {
    try {
      const response = await fetchLifetimeSales();
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadUserStatistic = createAsyncThunk(
  'admin/loadUserStatistic',
  async (arg) => {
    try {
      const response = await fetchUserStatistic(arg.startDate, arg.lastDate);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadUsers = createAsyncThunk(
  'admin/loadUsers',
  async (arg) => {
    try {
      const response = await fetchUsers(
        arg.userId, arg.name, arg.email, arg.limit, arg.page
      );
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadUserInfo = createAsyncThunk(
  'admin/loadUserInfo',
  async (userId) => {
    try {
      const response = await fetchUserInfo(userId);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadUserOrders = createAsyncThunk(
  'admin/loadUserOrders',
  async (userId) => {
    try {
      const response = await fetchUserOrders(userId);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadOrders = createAsyncThunk(
  'admin/loadOrders',
  async (arg) => {
    try {
      const response = await fetchOrders(arg.id, arg.email, arg.limit, arg.page);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadOrderInfo = createAsyncThunk(
  'admin/loadOrderInfo',
  async (id) => {
    try {
      const response = await fetchOrderInfo(id);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadProducts = createAsyncThunk(
  'admin/loadProducts',
  async (arg) => {
    try {
      const response = await fetchProducts(
        arg.categoryId, arg.name, arg.page, arg.limit, arg.minPrice, arg.maxPrice, arg.inStock
      );
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadProductInfo = createAsyncThunk(
  'admin/loadProductInfo',
  async (id) => {
    try {
      const response = await fetchProductInfo(id);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const addNewProduct = createAsyncThunk(
  'admin/addNewProduct',
  async (arg) => {
    try {
      console.log('image gallery api: ' + arg.imageGallery);
      const response = await createProduct(
        arg.categoriesId, 
        arg.name, 
        arg.price, 
        arg.rating, 
        arg.sizes, 
        arg.effects, 
        arg.relieve, 
        arg.ingridients, 
        arg.description, 
        arg.shortDescription, 
        arg.instock,
        arg.imageGallery
      );
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const editProduct = createAsyncThunk(
  'admin/editProduct',
  async (arg) => {
    try {
      const response = await updateProduct(
        arg.id,
        arg.categoriesId, 
        arg.name, 
        arg.price, 
        arg.rating, 
        arg.sizes, 
        arg.effects, 
        arg.relieve, 
        arg.ingridients, 
        arg.description, 
        arg.shortDescription, 
        arg.instock,
        arg.imageGallery
      );
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (id) => {
    try {
      const response = await removeProduct(id);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadPromocodes = createAsyncThunk(
  'admin/loadPromocodes',
  async (arg) => {
    try {
      const response = await fetchPromocodes(arg.limit, arg.page);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadPromocodeInfo = createAsyncThunk(
  'admin/loadPromocodeInfo',
  async (promocode) => {
    try {
      const response = await fetchPromocodeInfo(promocode);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const addNewPromocode = createAsyncThunk(
  'admin/addNewPromocode',
  async (arg) => {
    try {
      const response = await createPromocode(arg.promocode, arg.percentDiscount, arg.expirationDate);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const editPromocode = createAsyncThunk(
  'admin/editPromocode',
  async (arg) => {
    try {
      const response = await updatePromocode(arg.id, arg.promocode, arg.percentDiscount, arg.expirationDate);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

export const loadCategories = createAsyncThunk(
  'admin/loadCategories',
  async (arg) => {
    try {
      const response = await fetchCategories(arg.limit, arg.page);
      return response;
    }
    catch (error) {
      throw error.response.data
    }
  }
)

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminSignIn.pending, (state) => {
        state.isAdminLoginLoading = true;
      })
      .addCase(adminSignIn.fulfilled, (state, action) => {
        state.isAdminLogin = true;
        state.isAdminLoginLoading = false;
      })
      .addCase(adminSignIn.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isAdminLogin = false;
        state.isAdminLoginLoading = false;
      })

      .addCase(adminLoginCheck.pending, (state, action) => {
        state.isAdminLoginCheckLoading = true;
      })
      .addCase(adminLoginCheck.fulfilled, (state, action) => {
        state.isAdminLogin = true;
        state.adminInfo = action.payload;
        state.isAdminLoginCheckLoading = false;
      })
      .addCase(adminLoginCheck.rejected, (state, action) => {
        state.isAdminLogin = false;
        state.isAdminLoginCheckLoading = false;
      })

      .addCase(loadOrderStatistic.pending, (state) => {
        state.isOrderStatisticLoading = true;
      })
      .addCase(loadOrderStatistic.fulfilled, (state, action) => {
        state.orderStatistic = action.payload;
        state.isOrderStatisticLoading = false;
      })
      .addCase(loadOrderStatistic.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.orderStatistic = [];
        state.isOrderStatisticLoading = false;
      })

      .addCase(loadSaleStatistic.pending, (state) => {
        state.isSaleStatisticLoading = true;
      })
      .addCase(loadSaleStatistic.fulfilled, (state, action) => {
        state.saleStatistic = action.payload;
        state.isSaleStatisticLoading = false;
      })
      .addCase(loadSaleStatistic.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.saleStatistic = [];
        state.isSaleStatisticLoading = false;
      })

      .addCase(loadLifetimeOrders.pending, (state) => {
        state.isLifetimeOrdersLoading = true;
      })
      .addCase(loadLifetimeOrders.fulfilled, (state, action) => {
        state.lifetimeOrders = action.payload;
        state.isLifetimeOrdersLoading = false;
      })
      .addCase(loadLifetimeOrders.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.lifetimeOrders = null;
        state.isLifetimeOrdersLoading = false;
      })

      .addCase(loadLifetimeSales.pending, (state) => {
        state.isLifetimeSalesLoading = true;
      })
      .addCase(loadLifetimeSales.fulfilled, (state, action) => {
        state.lifetimeSales = action.payload;
        state.isLifetimeSalesLoading = false;
      })
      .addCase(loadLifetimeSales.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.lifetimeSales = null;
        state.isLifetimeSalesLoading = false;
      })

      .addCase(loadUserStatistic.pending, (state) => {
        state.isUserStatisticLoading = true;
      })
      .addCase(loadUserStatistic.fulfilled, (state, action) => {
        state.userStatistic = action.payload;
        state.isUserStatisticLoading = false;
      })
      .addCase(loadUserStatistic.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.userStatistic = [];
        state.isUserStatisticLoading = false;
      })

      .addCase(loadUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isUsersLoading = false;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.users = [];
        state.isUsersLoading = false;
      })

      .addCase(loadUserInfo.pending, (state) => {
        state.isUserInfoLoading = true;
      })
      .addCase(loadUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isUserInfoLoading = false;
      })
      .addCase(loadUserInfo.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.userInfo = [];
        state.isUserInfoLoading = false;
      })

      .addCase(loadUserOrders.pending, (state) => {
        state.isUserOrdersLoading = true;
      })
      .addCase(loadUserOrders.fulfilled, (state, action) => {
        state.userOrders = action.payload;
        state.isUserOrdersLoading = false;
      })
      .addCase(loadUserOrders.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.userOrders = [];
        state.isUserOrdersLoading = false;
      })

      .addCase(loadOrders.pending, (state) => {
        state.isOrdersLoading = true;
      })
      .addCase(loadOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isOrdersLoading = false;
      })
      .addCase(loadOrders.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.orders = [];
        state.isOrdersLoading = false;
      })

      .addCase(loadOrderInfo.pending, (state) => {
        state.isOrderInfoLoading = true;
      })
      .addCase(loadOrderInfo.fulfilled, (state, action) => {
        state.orderInfo = action.payload;
        state.isOrderInfoLoading = false;
      })
      .addCase(loadOrderInfo.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.orderInfo = [];
        state.isOrderInfoLoading = false;
      })

      .addCase(loadProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.products = [];
        state.isProductsLoading = false;
      })

      .addCase(loadProductInfo.pending, (state) => {
        state.isProductInfoLoading = true;
      })
      .addCase(loadProductInfo.fulfilled, (state, action) => {
        state.productInfo = action.payload;
        state.isProductInfoLoading = false;
      })
      .addCase(loadProductInfo.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.productInfo = [];
        state.isProductInfoLoading = false;
      })

      .addCase(addNewProduct.pending, (state) => {
        state.isAddNewProductLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isAddNewProductLoading = false;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isAddNewProductLoading = false;
      })

      .addCase(editProduct.pending, (state) => {
        state.isEditProductLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isEditProductLoading = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isEditProductLoading = false;
      })

      .addCase(loadPromocodes.pending, (state) => {
        state.isPromocodesLoading = true;
      })
      .addCase(loadPromocodes.fulfilled, (state, action) => {
        state.promocodes = action.payload;
        state.isPromocodesLoading = false;
      })
      .addCase(loadPromocodes.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.promocodes = [];
        state.isPromocodesLoading = false;
      })

      .addCase(loadPromocodeInfo.pending, (state) => {
        state.isPromocodeInfoLoading = true;
      })
      .addCase(loadPromocodeInfo.fulfilled, (state, action) => {
        state.promocodeInfo = action.payload;
        state.isPromocodeInfoLoading = false;
      })
      .addCase(loadPromocodeInfo.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.promocodeInfo = null;
        state.isPromocodeInfoLoading = false;
      })

      .addCase(addNewPromocode.pending, (state) => {
        state.isAddNewPromocodeLoading = true;
      })
      .addCase(addNewPromocode.fulfilled, (state, action) => {
        state.isAddNewPromocodeLoading = false;
      })
      .addCase(addNewPromocode.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isAddNewPromocodeLoading = false;
      })

      .addCase(editPromocode.pending, (state) => {
        state.isEditPromocodeLoading = true;
      })
      .addCase(editPromocode.fulfilled, (state, action) => {
        state.isEditPromocodeLoading = false;
      })
      .addCase(editPromocode.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isEditPromocodeLoading = false;
      })

      .addCase(loadCategories.pending, (state) => {
        state.isCategoriesLoading = true;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isCategoriesLoading = false;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.categories = null;
        state.isCategoriesLoading = false;
      })
  },
})

export default adminSlice.reducer;