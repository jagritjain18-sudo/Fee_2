import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart,increaseQuantity,decreaseQuantity,clearCart } from './CartSlice'; // Verify path

const CartCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Your cart is empty!</h2>
        <button 
          onClick={() => navigate('/product')} 
          className="px-6 py-3 font-bold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-all"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
    
        <h1 className="text-4xl font-black text-gray-900 tracking-tight align-middle mb-5">Shopping Cart</h1>
        
     

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border-[3px] border-black rounded-3xl p-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 rounded-xl object-cover border-2 border-black shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm font-bold text-gray-500">Price: {item.price}</p>
              </div>
            </div>

    
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
              
             
              <div className="flex items-center border-[3px] border-black rounded-xl overflow-hidden bg-gray-50">
                <button 
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-4 py-2 font-black text-lg bg-white border-r-[3px] border-black hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="px-5 font-extrabold text-gray-900 text-lg">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-4 py-2 font-black text-lg bg-white border-l-[3px] border-black hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700 font-bold text-sm underline tracking-wide"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button 
          onClick={() => dispatch(clearCart())}
          className="px-5 mt-5 py-2.5 font-bold text-sm text-red-600 border-2 border-red-600 rounded-xl hover:bg-red-50 active:scale-95 transition-all"
        >
          Clear All Cart
        </button>
    </div>
    
  );
};

export default CartCard;
