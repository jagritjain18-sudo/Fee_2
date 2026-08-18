import { useState } from 'react'
import './App.css'
import './index.css'
function Card(props) {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Product Name: {props.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          Description: {props.description}
        </p>
        <p className="text-indigo-600 font-bold mt-3">Price: {props.price}</p>
      </div>
      <div className="mt-4 flex gap-2 p-4">
        <button
          className={`px-4 py-2 rounded font-semibold transition 
            ${props.available
              ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg animate-pulse"
              : "bg-white text-gray-400 border border-gray-300 cursor-not-allowed"
            }`}
          disabled={!props.available}
        >
          Buy Now
        </button>
        <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Card;
