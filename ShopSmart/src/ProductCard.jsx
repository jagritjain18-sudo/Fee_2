function ProductCard({ title, description, src, price, rating, onAddToCart }) {
    return (
      <div className="w-72 bg-blue-400 pt-10 rounded-2xl overflow-hidden shadow-lg flex flex-col">
        <div className="flex-1 bg-white rounded-t-[60px] px-6 pt-7  text-center flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-blue-500 line-clamp-1">
              {title}
            </h2>
            <p className="text-xs text-gray-500 mt-2 line-clamp-3">
              {description}
            </p>
            <img
              src={src}
              alt={title}
              className="mt-5 mx-auto h-36 object-contain"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-3">
              <span className="text-xl font-extrabold text-gray-800">
                ${price}
              </span>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-amber-400 text-base">★</span>
                <span className="font-semibold text-gray-800">{rating}</span>
              </div>
            </div>
             </div>
        </div>
        <div>
            <button
              onClick={onAddToCart}
              className="w-full bg-blue-500 active:scale-95 text-white text-sm font-semibold py-2.5 "
            >
              Add to Cart
            </button>
          </div>
      </div>
    );
  }
  
  export default ProductCard;
  