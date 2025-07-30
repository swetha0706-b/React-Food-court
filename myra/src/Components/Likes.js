// import React, { useEffect, useState } from 'react';

// const Likes = () => {
//   const [favourites, setFavourites] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   // Load favourites from localStorage on mount
//   useEffect(() => {
//     const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
//     setFavourites(storedFavourites);
//   }, []);

//   // Update localStorage whenever favourites change
//   useEffect(() => {
//     localStorage.setItem('favourites', JSON.stringify(favourites));
//   }, [favourites]);

//   const removeFavourite = (id) => {
//     const updated = favourites.filter((p) => p.id !== id);
//     setFavourites(updated);
//   };

//   const clearFavourites = () => {
//     setFavourites([]);
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <header>
//         <button className="back-link" onClick={() => window.history.back()}>← Back</button>
//         {favourites.length > 0 && (
//           <button className="clear-btn" onClick={() => setShowModal(true)}>Clear All</button>
//         )}
//       </header>

//       <h2>Your Favourites</h2>

//       <div className="product-grid">
//         {favourites.length === 0 ? (
//           <p style={{ margin: '1rem' }}>No favourites yet.</p>
//         ) : (
//           favourites.map((p) => (
//             <div className="card" key={p.id}>
//               <img src={p.image} alt={p.name} />
//               <div className="card-content">
//                 <h4>{p.name}</h4>
//                 <div className="price-rating">
//                   <span>₹{p.price}</span>
//                   <span className="rating">⭐ {p.rating}</span>
//                 </div>
//                 <button className="remove-btn" onClick={() => removeFavourite(p.id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <p>Are you sure you want to remove all favourites?</p>
//             <div className="modal-buttons">
//               <button onClick={clearFavourites}>Yes</button>
//               <button onClick={() => setShowModal(false)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Likes;




// src/components/Likes.js

// import React, { useEffect, useState } from 'react';
// import CardList from '../Data/CardList';
// import ProductCard from './ProductCard';

// const Likes = () => {
//   const [favourites, setFavourites] = useState([]);
//   const [cart, setCart] = useState({});

//   useEffect(() => {
//     const storedFav = JSON.parse(localStorage.getItem('favourites')) || [];
//     setFavourites(storedFav);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favourites', JSON.stringify(favourites));
//   }, [favourites]);

//   const handleLikeToggle = (product) => {
//     const exists = favourites.find((p) => p.id === product.id);
//     if (exists) {
//       setFavourites(favourites.filter((p) => p.id !== product.id));
//     } else {
//       setFavourites([...favourites, product]);
//     }
//   };

//   const handleCartUpdate = (product, quantity) => {
//     setCart((prev) => ({
//       ...prev,
//       [product.id]: { ...product, quantity }
//     }));
//   };

//   const isLiked = (product) => favourites.some((p) => p.id === product.id);

//   return (
//     <div>
//       <h2>Pickles Menu</h2>
//       <div className="product-grid">
//         {CardList.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             isLiked={isLiked(product)}
//             onLikeToggle={handleLikeToggle}
//             onCartUpdate={handleCartUpdate}
//           />
//         ))}
//       </div>

//       <h3>Your Cart (for preview)</h3>
//       <ul>
//         {Object.values(cart).map((item) => (
//           <li key={item.id}>
//             {item.name} — Qty: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Likes;




import React, { useEffect, useState } from 'react';
import CardList from '../Data/CardList';
import ProductCard from './ProductCard';

const Likes = () => {
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFav);
  }, []);


  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleLikeToggle = (product) => {
    const exists = favourites.find((p) => p.id === product.id);
    if (exists) {
      setFavourites(favourites.filter((p) => p.id !== product.id));
    } else {
      setFavourites([...favourites, product]);
    }
  };

  const handleCartUpdate = (product, quantity) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: { ...product, quantity }
    }));
  };

  const isLiked = (product) => favourites.some((p) => p.id === product.id);

  // Inside Likes.js
useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
  setCart(storedCart);
}, []);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pickles Menu</h2>
      <div className="row">
        {CardList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard
              product={product}
              isLiked={isLiked(product)}
              onLikeToggle={handleLikeToggle}
              onCartUpdate={handleCartUpdate}
            />
          </div>
        ))}
      </div>

      <h3 className="mt-5">Your Cart (Preview)</h3>
      <ul>
        {Object.values(cart).map((item) => (
          <li key={item.id}>
            {item.name} — Qty: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Likes;
