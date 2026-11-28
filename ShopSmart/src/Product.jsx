import React,{useRef} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from './ProductCard';
import { addToCart } from './CartSlice';
import { previous,next } from './ProductsSlice';
import Navbar from './Navbar';
import { useEffect } from 'react';
const Product = ({loading,total,error}) => {
    const { items, sortBy, categoryFilter,skip } = useSelector((state) => state.product);
    const dispatch=useDispatch()
    const loadRef=useRef(null);
    const hasMore = total == null || items.length < total;
  const filteredProducts = items.filter((p) =>
    p.category.toLowerCase().includes(categoryFilter.toLowerCase().trim())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    return 0;
  });
  useEffect(() => {
    // Stop immediately if loading, error occurred, no more items, or initial load hasn't finished
    if (loading || error || !hasMore || items.length === 0 || !loadRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(next());
        }
      },
      { rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, [loading, error, hasMore, items.length, skip, dispatch]);
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
    })}
    <div ref={loadRef} className="text-center py-6">
        {loading && <p>Loading more...</p>}
        {!loading && !hasMore && items.length > 0 && <p>No more products</p>}
      </div>
    <div className='flex flex-wrap items-center gap-8 mb-5'>
      <button className='border rounded-lg px-3 py-2 text-sm bg-white ' onClick={()=>dispatch(previous())} disabled={skip==0}>Previous</button>
      <button className='border rounded-lg px-3 py-2 text-sm bg-white' onClick={()=>dispatch(next())}>Next</button>
    </div>
    </div>    
    </>
  )
}

export default Product