import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (item) => ({
        payload: {
          ...item,
          cartItemId: nanoid(), // unique key for React
        },
      }),
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
