import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    query:'',
    categoryFilter:'',
    sortBy:'',

}
 const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.items=action.payload;
        },
        setSortBy:(state,action)=>{
            state.sortBy=action.payload;
        },
        setCategoryFilter:(state,action)=>{
            state.categoryFilter=action.payload;
        }

    }
})

export const {setProducts,setSortBy, setCategoryFilter}=ProductsSlice.actions;
export default ProductsSlice.reducer;