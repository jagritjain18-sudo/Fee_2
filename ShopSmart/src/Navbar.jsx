import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setCategoryFilter } from './ProductsSlice';

const CATEGORIES = [
  'beauty',
  'fragrances',
  'furniture',
  'groceries',
];

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
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
        className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm"
      >
        <option value="">Sort by: Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Top Rated</option>
      </select>
    </>
  );
};

export default Navbar;
