import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalQuantity:0,
    totalPrice:0,
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const pro=action.payload;
            const exist= state.items.find((item)=>(item.id===pro.id));
            state.totalQuantity+=1;
            state.totalPrice=Number(state.totalPrice+pro.price);
            if(exist){
                exist.quantity+=1;
            }else{
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: 1,
                  });
            }
        },
        decreaseQuantity:(state,action)=>{
            const id=action.payload;
            const exist=state.items.find((i)=>i.id===id);
            if(!exist){
                return;
            }
            state.totalQuantity-=1;
            state.totalPrice=Number(state.totalPrice-exist.price);
            if(exist.quantity===1){
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) return;
      
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice = Number(
              (state.totalPrice - existingItem.price * existingItem.quantity).toFixed(2)
            );
            state.items = state.items.filter((item) => item.id !== id);
          },
      
          clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
          },
    }
})

export const {addToCart,decreaseQuantity,clearCart,removeFromCart}= CartSlice.actions;
export default CartSlice.reducer;