import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories.slice';
import cartReducer from './cart/cart.slice';
import productsReducer from './products/products.slice';
import userReducer from './user/user.slice';
import orderReducer from './order/order.slice';
import productReducer from './products/product.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
    user: userReducer,
    order: orderReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
