import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  fetchCartProducts, 
  addCartProduct,
  updateCartProductCount, 
  deleteCartProduct,
  deleteCart } from '../api/cartApi';

const initialState = {
  cartProducts: [],
  subTotal: 0,
  total: 0,
  count: 0,
  shippingCost: 50,
  isShippingFree: false,
  couponDiscount: 0,
  discount: 0,
  promoCode: '',
  isAddToCartLoading: false,
}

export const loadCartProducts = createAsyncThunk(
  'cart/loadCartProducts',
  async (userId) => {
    try {
      const response = await fetchCartProducts(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async (arg) => {
    try {
      const response = await addCartProduct(arg.userId, arg.productId, arg.selectedSize, arg.count);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const changeCartProductCount = createAsyncThunk(
  'cart/changeCartProductCount',
  async (arg) => {
    try {
      const response = await updateCartProductCount(arg.userId, arg.cartProductId, arg.newCount);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const removeCartProduct = createAsyncThunk(
  'cart/removeCartProduct',
  async (arg) => {
    try {
      const response = await deleteCartProduct(arg.cartProductId, arg.userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const deleteUserCart = createAsyncThunk(
  'cart/deleteUserCart',
  async (userId) => {
    try {
      const response = await deleteCart(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

//LocalStorage cart functions:

export const checkLocalCart = createAsyncThunk(
  'cart/checkLocalCart',
  async () => {
    let cart;
    let cartProducts;

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      cart = {
        subTotal: 0,
        count: 0,
        isShippingFree: false,
      }
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    if (localStorage.getItem('cartProducts')) {
      cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    } else {
      cartProducts = []
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }

    const stateValues = {
      subTotal: cart.subTotal,
      count: cart.count,
      isShippingFree: cart.isShippingFree,
      cartProducts: cartProducts
    }
    return stateValues;
  }
)

export const localAddProductToCart = createAsyncThunk(
  'cart/localAddProductToCart',
  async (arg) => {
    const product = arg.product;
    const productCount = arg.productCount;
    const size = arg.size;

    const cart = JSON.parse(localStorage.getItem('cart'))
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'))

    const duplicate = cartProducts.find(item => item.product.id === product.id && item.selectedSize === size);

    if (duplicate) {
      const duplicateIndex = cartProducts.findIndex(item => 
        item.product.id === product.id && item.selectedSize === size
      );
      const cartProductToAdd = {
        product: product,
        id: duplicate.id,
        count: duplicate.count + productCount,
        totalPrice: duplicate.totalPrice + product.price * productCount,
        selectedSize: size
      }
      cartProducts[duplicateIndex] = cartProductToAdd;

      const newSubTotal = cart.subTotal + product.price * productCount;
      cart.subTotal = newSubTotal
      cart.isShippingFree = newSubTotal >= 100 ? true : false;
    }
    else {
      const cartProductToAdd = {
        product: product,
        id: Math.floor(Math.random() * 100000),
        count: productCount,
        totalPrice: product.price * productCount,
        selectedSize: size
      }
      cartProducts.push(cartProductToAdd);

      const newSubTotal = cart.subTotal + product.price * productCount;
      cart.subTotal = newSubTotal
      cart.count += productCount
      cart.isShippingFree = newSubTotal >= 100 ? true : false;
    }

    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    localStorage.setItem('cart', JSON.stringify(cart))

    const stateValues = {
      subTotal: cart.subTotal,
      count: cart.count,
      isShippingFree: cart.isShippingFree,
      cartProducts: cartProducts,
    }
    return stateValues;
  }
)

export const localChangeCartProductCount = createAsyncThunk(
  'cart/localChangeCartProductCount',
  async (arg) => {
    const cartProductId = arg.cartProductId;
    const newCount = arg.newCount;

    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    const productToUpdate = cartProducts.find(item => item.id === cartProductId);
    const productIndex = cartProducts.findIndex(item => item.id === cartProductId);

    productToUpdate.count = newCount;
    const totalPriceBeforeChange = productToUpdate.totalPrice;
    productToUpdate.totalPrice = productToUpdate.product.price * newCount;
    cartProducts[productIndex] = productToUpdate;
    
    cart.subTotal = (cart.subTotal - totalPriceBeforeChange) + productToUpdate.product.price * newCount;

    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    localStorage.setItem('cart', JSON.stringify(cart))

    const stateValues = {
      subTotal: cart.subTotal,
      count: cart.count,
      isShippingFree: cart.isShippingFree,
      cartProducts: cartProducts,
    }
    return stateValues;
  }
)

export const localRemoveCartProduct = createAsyncThunk(
  'cart/localRemoveCartProduct',
  async (cartProductId) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    const deletedProduct = cartProducts.find(item => item.id === cartProductId);
    const updatedCartProducts = cartProducts.filter(item => item.id !== cartProductId);

    cart.subTotal -= deletedProduct.totalPrice;
    cart.count -= 1;

    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts))
    localStorage.setItem('cart', JSON.stringify(cart))

    const stateValues = {
      subTotal: cart.subTotal,
      count: cart.count,
      isShippingFree: cart.isShippingFree,
      cartProducts: updatedCartProducts,
    }
    return stateValues;
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSubTotalPrice: (state, action) => {
      state.subTotal = action.payload
    },
    setPromoCode: (state, action) => {
      state.promoCode = action.payload
    },
    setIsShippingFree: (state, action) => {
      state.isShippingFree = action.payload
    },
    setTotal: (state, action) => {
      state.total = action.payload
    },
    setDiscount: (state, action) => {
      state.discount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCartProducts.pending, (state) => {
       state.isLoading = true;
      })
      .addCase(loadCartProducts.fulfilled, (state, action) => {
        state.cartProducts = action.payload.products;
        state.count = action.payload.products.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
        state.isAddToCartLoading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload.products;
        state.count = action.payload.products.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
        state.isAddToCartLoading = false;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.isAddToCartLoading = false;
      })
      .addCase(removeCartProduct.fulfilled, (state, action) => {
        state.cartProducts = action.payload.products;
        state.count = action.payload.products.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(changeCartProductCount.fulfilled, (state, action) => {
        state.count = action.payload.products.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(checkLocalCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload.cartProducts;
        state.count = action.payload.cartProducts.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(localAddProductToCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload.cartProducts;
        state.count = action.payload.cartProducts.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(localChangeCartProductCount.fulfilled, (state, action) => {
        state.cartProducts = action.payload.cartProducts;
        state.count = action.payload.cartProducts.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
      .addCase(localRemoveCartProduct.fulfilled, (state, action) => {
        state.cartProducts = action.payload.cartProducts;
        state.count = action.payload.cartProducts.length;
        state.subTotal = action.payload.subTotal;
        state.isLoading = false;
      })
  },
})

export const { setSubTotalPrice, setPromoCode, setIsShippingFree, setTotal, setDiscount} = cartSlice.actions

export default cartSlice.reducer;