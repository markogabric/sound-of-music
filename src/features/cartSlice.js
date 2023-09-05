import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartTotal: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.cartTotal += parseInt(action.payload["price"].replace(/[€,]/g, ''), 10);
        },
        removeFromCart: (state, action) => {
            state.cart.splice(state.cart.findIndex(item => item === action.payload), 1);
            state.cartTotal -= parseInt(action.payload["price"].replace(/[€,]/g, ''), 10);
        },
        emptyCart: (state) => {
            state.cart = [];
            state.cartTotal = 0;
        }
    }
})

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;