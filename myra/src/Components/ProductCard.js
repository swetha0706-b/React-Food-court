// src/components/ProductCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onLikeToggle, isLiked, onCartUpdate }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((c) => c + 1);
    onCartUpdate(product, count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((c) => c - 1);
      onCartUpdate(product, count - 1);
    }
  };

  return (
    // <div className="card">
    //   <img src={product.image} alt={product.name} />
    //   <div className="card-content">
    //     <h4>{product.name}</h4>
    //     <p>₹{product.price}</p>
    //     <p>⭐ {product.rating}</p>

    //     <div className="quantity-controls">
    //       <button onClick={decrement}>-</button>
    //       <span>{count}</span>
    //       <button onClick={increment}>+</button>
    //     </div>

    //     <div className="action-buttons">
    //       <button onClick={() => onLikeToggle(product)}>
    //         {isLiked ? '❤️ Liked' : '🤍 Like'}
    //       </button>
    //       <button onClick={() => onCartUpdate(product, count)}>
    //         🛒 Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>

    
<div className="card h-100">
  <img src={product.image} className="card-img-top" alt={product.name} />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">₹{product.price} • ⭐ {product.rating}</p>

    <div className="mt-auto">
      <div className="d-flex justify-content-between mb-2">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="btn btn-outline-danger w-100 mb-2" onClick={() => onLikeToggle(product)}>
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
       <button className="btn btn-outline-primary w-100" onClick={() => onCartUpdate(product, count)}>
        🛒 Add to Cart
      </button> 
      <Link to="/cart">
  <button className="btn btn-success mt-3">Go to Cart 🛒</button>
</Link>
    </div>
  </div>
</div>

  );
};

export default ProductCard;


