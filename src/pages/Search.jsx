import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // adjust path if needed
import "./Search.css";

const productsData = [
  { id: 1, name: "Glow Face Wash", category: "Face Wash", price: 299, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQdms7mZaJOhuA91v2EdgNqefkYuxr02uQg0HJ_7jcJuLT-mIUeWY8njrlpOSdVyae15TQL6Ue64asXPGCkL5dCuZd6OdmEdWRXw8pL6xayiZL8-n8QyH3C_w&usqp=CAc" },
  { id: 2, name: "Hydrating Moisturizer", category: "Moisturizer", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2OVyQWlmP8tKwQXmUkq28CxTAdTwZ2ysZw&s" },
  { id: 3, name: "Sun Shield SPF50", category: "Sunscreen", price: 399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWFF3_qyRH_QL6H7SKWcJSNwha2D435rnoA&s" },
  { id: 4, name: "Vitamin C Serum", category: "Serum", price: 699, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxipUJ7y0gGChgfIglGN6s90uvotYlpUGYOg&s" },
  { id: 5, name: "Purifying Face Wash", category: "Face Wash", price: 350, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYGP8TB9UsjuhTFUrg5hKXcVjMdzMY8MVU94IK0s-DE0Q8C4yBxIMC1c&s" },
  { id: 6, name: "Nourishing Moisturizer", category: "Moisturizer", price: 550, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT2uM82-nq65AyklR7t6cN9B-RHZ6yaJdSQ&s" },
  { id: 7, name: "Daily Sunscreen SPF30", category: "Sunscreen", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtiOQtIgBKobtn12a-QRQ1dAJeK1kkp5FXQ&s" },
  { id: 8, name: "Hyaluronic Acid Serum", category: "Serum", price: 799, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1q911qLPnD-34eE1dQTgTrw035rgV35NObw&s" },
];

const categories = ["All", "Face Wash", "Moisturizer", "Sunscreen", "Serum"];

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useContext(CartContext); 

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handlePriceChange = (e) => setPriceRange([0, Number(e.target.value)]);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleBuyNow = (product) => {
    addToCart(product); 
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts = productsData.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1>Our Products</h1>

      {}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {}
      <div className="filters">
        <div className="category-filter">
          <h3>Filter by Category</h3>
          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="price-filter">
          <h3>Filter by Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <p>Up to ₹{priceRange[1]}</p>
        </div>
      </div>

      {/*  Product list */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p className="price">₹{product.price}</p>
              <button className="buy-btn" onClick={() => handleBuyNow(product)}>
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Search;
