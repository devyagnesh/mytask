// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slice/ProductSlice';


const store = configureStore({
  reducer: {
    cart: productReducer,
  },
});

export default store;
