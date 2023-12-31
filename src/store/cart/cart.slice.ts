import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../products/products.type';
import { CartState } from './cart.type';

//주문 정보를 mockaip 서버로 post함
export const postOrder = createAsyncThunk(
  'cart/postOrder',
  async (order: CartState, thunkAPI) => {
    try {
      await axios.post(
        'https://656035cc83aba11d99d063e4.mockapi.io/orders',
        order
      );

      thunkAPI.dispatch(sendOrder());
    } catch (error) {
      return thunkAPI.rejectWithValue('Error sending order');
    }
  }
);

export const initialState: CartState = {
  //cartProducts로 저장된 키값 가져와서 초기값 세팅
  //금액은 0으로, user id도 로컬스토리지에서 가져와 초기값 세팅
  products: localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts') || '')
    : [],
  totalPrice: 0,
  userId: localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('userId') || '')
    : '',
  orders: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;

      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    removeUserId: (state) => {
      state.userId = '';

      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });

      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      console.log(state.products);
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },

    decrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      );
    },
    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  sendOrder,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
} = cartSlice.actions;

export default cartSlice.reducer;
