import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
const Card = ({ product }) => {
    const dispatch=useDispatch();
    const handleAddToCart=()=>{
        dispatch(addToCart(product))
        alert("Product added")
    };
  return (
    <>
      <div className='bg-white w-1/4 rounded-2xl p-6 m-4 border-[3px] border-black shadow-2xl flex flex-col justify-between'>
        
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className='rounded-2xl h-48 w-full object-cover'
          />
          
          <div className='flex flex-col mt-4'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 leading-tight'>{product.name}</h1>
            <p className='text-xs font-semibold text-gray-600 mt-1 line-clamp-2'>{product.description}</p>
          </div>
        </div>

        <div className='flex justify-between items-center mt-6 mb-1'>
          <div className='flex flex-col'>
            <span className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Price</span>
            <h2 className='text-2xl font-black text-gray-900'>{product.price}</h2>
          </div>
          
          <button onClick={handleAddToCart}
          className='rounded-xl bg-blue-600 px-5 py-3 text-base font-bold text-white hover:bg-blue-700 active:scale-95 transition-all duration-150 whitespace-nowrap shadow-md shadow-blue-600/10'>
            Add to Cart
          </button>
        </div>

      </div>
    </>
  )
}

export default Card;
