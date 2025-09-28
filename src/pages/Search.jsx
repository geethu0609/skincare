import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const productsData = [
  { id: 1, name: "Glow Face Wash", category: "Face Wash", price: 299, image: "/images/facewash1.jpg" },
  { id: 2, name: "Hydrating Moisturizer", category: "Moisturizer", price: 499, image: "/images/moisturizer1.jpg" },
  { id: 3, name: "Sun Shield SPF50", category: "Sunscreen", price: 399, image: "/images/sunscreen1.jpg" },
  { id: 4, name: "Vitamin C Serum", category: "Serum", price: 699, image: "/images/serum1.jpg" },
  { id: 5, name: "Purifying Face Wash", category: "Face Wash", price: 350, image: "/images/facewash2.jpg" },
  { id: 6, name: "Nourishing Moisturizer", category: "Moisturizer", price: 550, image: "/images/moisturizer2.jpg" },
  { id: 7, name: "Daily Sunscreen SPF30", category: "Sunscreen", price: 299, image: "/images/sunscreen2.jpg" },
  { id: 8, name: "Hyaluronic Acid Serum", category: "Serum", price: 799, image: "/images/serum2.jpg" },
];

const categories = ["All", "Face Wash", "Moisturizer", "Sunscreen", "Serum"];

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]); // store cart items

  const navigate = useNavigate();

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handlePriceChange = (e) => setPriceRange([0, Number(e.target.value)]);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleBuyNow = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // increase quantity if product already in cart
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    // Redirect to Cart page with cart data
    navigate("/cart", { state: { cart } });
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

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

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

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p className="price">₹{product.price}</p>
              <button className="buy-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
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
