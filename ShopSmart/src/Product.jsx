import React from 'react'
import { useSelector} from 'react-redux'
import ProductCard from './ProductCard';
const Product = () => {
    const { items, sortBy, categoryFilter } = useSelector((state) => state.product);

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
          rating={p?.rating}></ProductCard>
        )
    })};
    </div>    
    </>
  )
}

export default Product