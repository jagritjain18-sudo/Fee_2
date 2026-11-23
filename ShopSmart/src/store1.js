import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import cartReducer from "./CartSlice"
export const store1 = configureStore({
    reducer:{
        product:ProductsReducer,
        cart:cartReducer
    }
})