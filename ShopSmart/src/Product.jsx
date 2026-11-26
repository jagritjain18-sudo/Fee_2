import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from './ProductCard';
import { addToCart } from './CartSlice';
import { previous,next } from './ProductsSlice';
import Navbar from './Navbar';
const Product = () => {
    const { items, sortBy, categoryFilter,skip } = useSelector((state) => state.product);
    const dispatch=useDispatch()
  const filteredProducts = items.filter((p) =>
    p.category.toLowerCase().includes(categoryFilter.toLowerCase().trim())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    return 0;
  });
  return (
    <>
    <div className="flex flex-wrap justify-center gap-8 mt-8">
    {sortedProducts.map((p)=>{
        return (
            <ProductCard
            key={p.id}
            title={p?.title}
          src={p?.thumbnail}
          price={p?.price}
          description={p?.description}
          rating={p?.rating}
          onAddToCart={()=>dispatch(addToCart(p))}
          ></ProductCard>
        )
    })};
    <div className='flex flex-wrap items-center gap-8 mb-5'>
      <button className='border rounded-lg px-3 py-2 text-sm bg-white ' onClick={()=>dispatch(previous())} disabled={skip==0}>Previous</button>
      <button className='border rounded-lg px-3 py-2 text-sm bg-white' onClick={()=>dispatch(next())}>Next</button>
    </div>
    </div>    
    </>
  )
}

export default Product