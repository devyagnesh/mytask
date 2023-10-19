import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  inCart: 0,
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action)
      state.products.push(action.payload);
      state.total += (action.payload.price * action.payload.quantity);
      state.inCart = state.products.length;
    },
  },
});

export const {addToCart} = productSlice.actions;
export default productSlice.reducer;