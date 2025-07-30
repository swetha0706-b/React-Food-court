// // src/components/Cart.js
// import React, { useEffect, useState } from 'react';

// const Cart = () => {
//   const [cart, setCart] = useState({});

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
//     setCart(storedCart);
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const removeFromCart = (id) => {
//     const updatedCart = { ...cart };
//     delete updatedCart[id];
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {Object.keys(cart).length === 0 ? (
//         <p>No items in the cart.</p>
//       ) : (
//         <ul>
//           {Object.values(cart).map((item) => (
//             <li key={item.id} style={{ marginBottom: '1rem' }}>
//               <strong>{item.name}</strong> — Qty: {item.quantity} — ₹{item.price}
//               <br />
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;



// src/Components/Cart.js
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || {};
    setCartItems(stored);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {Object.values(cartItems).map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {item.name} — Qty: {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

