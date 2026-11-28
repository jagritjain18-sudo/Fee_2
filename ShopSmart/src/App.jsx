import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './ProductsSlice';
import Product from './Product';
import Navbar from './Navbar';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { query, skip,categoryFilter  } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    const url = categoryFilter
      ? `https://dummyjson.com/products/category/${categoryFilter}?limit=12&skip=${skip}`
      : `https://dummyjson.com/products/search?q=${query}&limit=12&skip=${skip}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isCancelled) return;
        dispatch(setProducts(data.products));
        setTotal(data.total);
      })
      .catch((err) => {
        if (!isCancelled) setError(err.message);
      })
      .finally(() => {
        if (!isCancelled) setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [query, skip, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Product loading={loading} total={total} error={error} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
