import React from 'react'
import { useNavigate } from 'react-router-dom'
import products from './Products';
import Card from './Card';
const ProductsPage = () => {
  const navigate=useNavigate();
  return (
    <>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-xl shadow-md shadow-blue-600/20"
        >
          Home
        </button>

        <button 
          onClick={() => navigate('/cart')}
          className="px-8 py-4 text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all duration-200 rounded-xl shadow-md shadow-emerald-600/20"
        >
           View Cart 
        </button>
       
        <div className='flex flex-wrap gap-6 justify-center p-6"'>
          {products.map((product) => {
            return <Card key={product.id} product={product}/>
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsPage