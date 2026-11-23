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
        },
        setQuery:(state,action)=>{
            state.query=action.payload;
        }

    }
})

export const {setProducts,setSortBy, setCategoryFilter,setQuery}=ProductsSlice.actions;
export default ProductsSlice.reducer;