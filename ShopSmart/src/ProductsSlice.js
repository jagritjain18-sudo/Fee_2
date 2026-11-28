import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    query:'',
    categoryFilter:'',
    sortBy:'',
    skip:0

}
 const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            if(state.skip===0){
            state.items=action.payload;}
            else{
                state.items.push(...action.payload);
            }
        },
        setSortBy:(state,action)=>{
            state.sortBy=action.payload;
        },
        setCategoryFilter:(state,action)=>{
            state.categoryFilter=action.payload;
            state.skip=0;
        },
        setQuery:(state,action)=>{
            state.query=action.payload;
            state.skip=0;
           
        },
        next:(state)=>{
            state.skip+=12;
        },
        previous:(state)=>{
            if(state.skip>=12){
                state.skip-=12;
            }
        }

    }
})

export const {setProducts,setSortBy, setCategoryFilter,setQuery,next,previous}=ProductsSlice.actions;
export default ProductsSlice.reducer;