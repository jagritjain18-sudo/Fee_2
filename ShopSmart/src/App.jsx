import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import { setProducts } from './ProductsSlice';
import Product from './Product';
import Navbar from './Navbar';
import Cart from "./Cart";

function App() {
  const dispatch=useDispatch();
  const { query} = useSelector((state) => state.product);
  const [debounce, setDebounce] = useState('');
  const [count,setCount]=useState(0);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=12&skip=0`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products ));
        console.log(data.products);
      });
  }, [query]);


 function add(){
  setCount(count+1);
 }
  return (
    <>
    <Navbar/>
    <Product/>
    <Cart/>
    </>
  );
}

export default App;
