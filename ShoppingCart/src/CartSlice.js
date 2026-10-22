import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const exist = state.items.find(item => item.id === product.id);
            if (exist) {
                exist.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
    
        removeFromCart: (state, action) => {
            const id = action.payload; 
            state.items = state.items.filter(item => item.id !== id);
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    item.quantity -= 1;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
