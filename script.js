


const categories = [
  {
    image: "img1.png",
    name: "Pickles",
   
  },
  {
    image: "img1.png",
    name: "Sweets",
    
  },
  {
    image: "img1.png",
    name: "Snacks",
    
  },
  {
    image: "img1.png",
    name: "Healthy Snacks",
    
  }
];

const container = document.getElementById("category-container");

categories.forEach(category => {
  const div = document.createElement("div");
  div.className = "category-item";
  div.innerHTML = `
    <img src="${category.image}" alt="${category.name}">
    <p>${category.name}</p>
  `;
  container.appendChild(div);
});




const recentlyViewed = [];

function addToRecentlyViewed(product) {
  const container = document.getElementById("recentViewRow");

  // Check if already viewed
  if (recentlyViewed.find(p => p.name === product.name)) return;

  recentlyViewed.unshift(product); // add to beginning
  if (recentlyViewed.length > 6) recentlyViewed.pop(); // limit items

  container.innerHTML = ''; // clear
  recentlyViewed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
    `;
    container.appendChild(card);
  });
}

// Example: Call this function when a product is viewed
// You can trigger this on click of product cards
addToRecentlyViewed({ name: "Gongura Chicken", image: "images/gongura.jpg" });
addToRecentlyViewed({ name: "Avakaya", image: "images/avakaya.jpg" });
// You can dynamically call this as needed


