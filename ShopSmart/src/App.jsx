import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [debounce, setDebounce] = useState('');
  const [sortBy, setSortBy] = useState(''); 
  const [skip,setSkip]=useState(0);
  const [count,setCount]=useState(0);
  const [url,setUrl]=useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(name);
    }, 500);
    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${debounce}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products );
        console.log(data.products);
      });
  }, [debounce]);

  const filteredProducts = product.filter((p) =>
    p.category.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating-desc') return b.rating - a.rating; 
    
    return 0; 
  });
 function add(){
  setCount(count+1);
 }
  return (
    <>
      <h1>Shop Smart</h1>

   <h1>Products in Cart {count}</h1>
        <input type="text" placeholder="Search your product" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Filter by category" value={filter} onChange={(e) => setFilter(e.target.value)}/>  
        
        <button onClick={() => setSortBy('price-asc')} className='border'>Price: Low to High</button>
        <button onClick={() => setSortBy('price-desc')} className='border'>Price: High to Low</button>
        <button onClick={() => setSortBy('rating-desc')}className='border'>Top Rated</button>
        <button onClick={() => setSortBy('')}className='border'>Reset</button>
      
      <ol>
        {sortedProducts.map((p) => (
          <li key={p.id}>
            <img src={p.thumbnail} className='h-50 w-50'/>
            {p.title} — {p.category} ${p.price} {p.rating} 
            <button onClick={add} className='border'>Add to cart</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
