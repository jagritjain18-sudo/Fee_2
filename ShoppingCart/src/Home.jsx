import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] font-sans p-8">
      <header className="text-center bg-slate-50 border border-slate-100 p-12 rounded-2xl shadow-sm max-w-2xl w-full mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Welcome to Our QuickShop! 
        </h1>
        <p className="text-lg text-slate-600">
          Discover amazing products at unbeatable prices.
        </p>
      </header>
      <div className="flex flex-wrap gap-6 justify-center">
        <button 
          onClick={() => navigate('/product')}
          className="px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-xl shadow-md shadow-blue-600/20"
        >
        Browse Products
        </button>

        <button 
          onClick={() => navigate('/cart')}
          className="px-8 py-4 text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all duration-200 rounded-xl shadow-md shadow-emerald-600/20"
        >
           View Cart 
        </button>
      </div>
    </div>
  );
}

export default Home;
