import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";

export const store1 = configureStore({
    reducer:{
        product:ProductsReducer
    }
})