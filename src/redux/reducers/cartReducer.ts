import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, product } from "../../types/product";



const initalstate: Cart[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initalstate,

  reducers: {
    addtoCart: (state, actions: PayloadAction<product>) => {
      const index = state.findIndex((item) => item.id === actions.payload.id);
      if (index === -1) {
        state.push({ ...actions.payload, count: 1 });
      } else {
        state[index].count += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      if (state[action.payload].count > 1) {
        state[action.payload].count -= 1;
      } else {
        state.splice(action.payload, 1);
      }
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartReducer;