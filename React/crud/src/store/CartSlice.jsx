import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData:
    localStorage.getItem("myCart") != undefined
      ? JSON.parse(localStorage.getItem("myCart"))
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    myAddCart(state, actions) {
      state.cartData = actions.payload;
    },

    decrement: (state, action) => {
      const index = action.payload;
      if (state.cartData[index].purchaseQuantity > 1) {
        state.cartData[index].purchaseQuantity -= 1;
      } else {
        state.cartData.splice(index, 1); 
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartData)); 
    },

    increment(state, actions) {
      const index = actions.payload;
      state.cartData[index].purchaseQuantity += 1;
      localStorage.setItem("myCart", JSON.stringify(state.cartData));
    },
  },
});

export const { myAddCart, decrement, increment } = cartSlice.actions;
export default cartSlice.reducer;
