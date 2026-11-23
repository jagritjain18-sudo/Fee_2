import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setCategoryFilter, setQuery } from './ProductsSlice';
import {ShoppingCart} from "lucide-react"

const CATEGORIES = [
  'beauty',
  'fragrances',
  'furniture',
  'groceries',
];

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setQuery(searchText));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText, dispatch]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-blue-600 shadow">
      <h1 className="text-2xl font-bold text-white">ShopSmart</h1>

      <div className="flex flex-wrap items-center gap-3">
        <input type="text" value={searchText} placeholder="Search Product" onChange={(e) => setSearchText(e.target.value)}
          className=" border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"/>
        <select
          onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white capitalize cursor-pointer"
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace('-', ' ')}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm cursor-pointer"
        >
          <option value="">Sort by: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
        <ShoppingCart size={30} strokeWidth={2.5} color='white' />
      </div>
    </div>
  );
};

export default Navbar;
