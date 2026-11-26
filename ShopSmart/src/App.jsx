import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import { setProducts } from './ProductsSlice';
import Product from './Product';
import Navbar from './Navbar';
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch=useDispatch();
  const { query,skip} = useSelector((state) => state.product);
  const [debounce, setDebounce] = useState('');
  const [count,setCount]=useState(0);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=12&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products ));
      });
  }, [query,skip]);


 function add(){
  setCount(count+1);
 }
  return (
    <>
 
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
