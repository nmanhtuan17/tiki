import {createSlice} from "@reduxjs/toolkit";
import {IBook} from "./app.slice.ts";

interface ICartItem {
  item: IBook;
  qty: number;
}
export interface CartSliceState {
  cart: ICartItem[]
}

const initialState: CartSliceState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart.push(action.payload);
    },
    deleteCart: (state) => {
      state.cart = initialState.cart;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.item.id !== action.payload)
    }
  },
  extraReducers: ()=> {}
})

export const {addToCart, deleteCart, removeFromCart} = cartSlice.actions
