import { useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import shoe1 from "../assets/5ames.png";
import shoe2 from "../assets/awl.png";
import shoe3 from "../assets/sades.png";
import shoe4 from "../assets/rabe3.png";
import shoe5 from "../assets/talt.png";
import shoe6 from "../assets/tany.png";

const products = [
  { id: 1, name: "Snatch Women's Leather Block Heeled Pump", subtitle: "Leather Upper and inner Material", price: 399.00, image: shoe1, badge: null },
  { id: 2, name: "Og Classic Ballerina Flats – Patent Leather Look With Bow Detai", subtitle: "Synthetic Patent Leather", price: 660.00, image: shoe2, badge: null },
  { id: 3, name: "adidas womens CRAZYCHAOS 2000 Sneaker", subtitle: "Rubber", price: 2945.00, image: shoe3, badge: null },
  { id: 4, name: "Ballerina flat Leather mesh BF-812", subtitle: "Wipe with Damp Cloth", price: 679.50, image: shoe4, badge: null },
  { id: 5, name: "adidas Advantage Base 2.0 womens Shoes", subtitle: "Regular fit", price: 5499.00, image: shoe5, badge: null },
  { id: 6, name: "Women's Soft Leather Comfortable Shoes - Lightweight and Anti-Slip Flat", subtitle: "Made of soft elastic skin material.", price: 529.00, image: shoe6, badge: null },
];

export default function Categories() {
  const [activeButton, setActiveButton] = useState(3);
  const [likedItems, setLikedItems] = useState([]);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((item) => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  return (
    <div className="categ-page">
      <main className="categ-main">
        <div className="categ-header">
          <div>
            <h2 className="categ-title">CATEGORIES</h2>
            <p className="categ-subtitle">Curated essentials for the modern lifestyle.</p>
          </div>
          <div className="sortby-control">
            <span className="sortby-label">SORT BY</span>
            <select className="sortby-select" defaultValue="Featured">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-wrap">
                {product.badge && (
                  <span className={`card-badge ${product.badge === "SALE" ? "badge-sale" : "badge-limited"}`}>
                    {product.badge}
                  </span>
                )}
                <img src={product.image} className="card-img" alt={product.name} />
                <button 
                  className={`love-btn ${likedItems.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleLike(product.id)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={likedItems.includes(product.id) ? "#ff0000" : "white"} stroke={likedItems.includes(product.id) ? "#ff0000" : "currentColor"} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="card-info">
                <div className="card-detailss">
                  <div className="card-text-container">
                    <p className="card-name">{product.name}</p>
                    <p className="card-sub">{product.subtitle}</p>
                  </div>
                  <span className="card-price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <Link to="/bags"> 
            <button
              onClick={() => handleButtonClick(1)}
              className={`pagination-btn ${activeButton === 1 ? "active" : ""}`}
            >
              1
            </button>
          </Link>

          <Link to="/pullovers">
            <button
              onClick={() => handleButtonClick(2)}
              className={`pagination-btn ${activeButton === 2 ? "active" : ""}`}
            >
              2
            </button>
          </Link>

          <Link to="/shoes">
            <button
              onClick={() => handleButtonClick(3)}
              className={`pagination-btn ${activeButton === 3 ? "active" : ""}`}
            >
              3
            </button>
          </Link>

          <Link to="/suits">
            <button
              onClick={() => handleButtonClick(4)}
              className={`pagination-btn ${activeButton === 4 ? "active" : ""}`}
            >
              4
            </button>
          </Link>

          <button to="/watches"
            onClick={() => handleButtonClick(5)}
            className={`pagination-btn ${activeButton === 5 ? "active" : ""}`}
          >
            5
          </button>
        </div>
      </main>
    </div>
  );
}