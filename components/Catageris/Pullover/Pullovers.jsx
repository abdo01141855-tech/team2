import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pullovers.css";
import pullover1 from "./assets/pullover-camel.png";
import pullover2 from "./assets/pullover-gray.png";
import pullover3 from "./assets/pullover-green.png";
import pullover4 from "./assets/pullover-navy.png";
import pullover5 from "./assets/pullover-orange.png";
import pullover6 from "./assets/pullover-teal.png";

const products = [
  {
    id: 1,
    tag: "Camel Collection",
    name: "Camel Wool Pullover",
    price: "$185",
    badge: { label: "Handmade", bg: "#f0ebe3", color: "#5a4a35" },
    image: pullover1,
  },
  {
    id: 2,
    tag: "Gray Collection",
    name: "Gray Cashmere Pullover",
    price: "$420",
    badge: null,
    image: pullover2,
  },
  {
    id: 3,
    tag: "Green Collection",
    name: "Green Knit Pullover",
    price: "$220",
    badge: { label: "Limited", bg: "#2d6a4f", color: "#a8d5bf" },
    image: pullover3,
  },
  {
    id: 4,
    tag: "Navy Collection",
    name: "Navy Blue Pullover",
    price: "$235",
    badge: null,
    image: pullover4,
  },
  {
    id: 5,
    tag: "Orange Collection",
    name: "Orange Wool Pullover",
    price: "$350",
    badge: null,
    image: pullover5,
  },
  {
    id: 6,
    tag: "Teal Collection",
    name: "Teal Knit Pullover",
    price: "$415",
    badge: { label: "Lead-free", bg: "#e8f4e8", color: "#2d6a4f" },
    image: pullover6,
  },
];

function ProductCard({ product }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="image-overlay"></div>
        {product.badge && (
          <div
            className="card-badge"
            style={{ background: product.badge.bg, color: product.badge.color }}
          >
            {product.badge.label}
          </div>
        )}
        <button className="wish-btn" onClick={() => setWished(!wished)}>
          {wished ? "♥" : "♡"}
        </button>

        <div className="card-info-overlay">
          <p className="card-tag">{product.tag}</p>
          <p className="card-name">{product.name}</p>
          <span className="card-price">{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopAll() {
  const [activeButton, setActiveButton] = useState(2); // 2 = Pullovers (الصفحة الحالية)

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className="shop-grid">
        {products.map((product) => (
          // ← هنا التعديل الوحيد: لف الكارد بـ Link
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            style={{ textDecoration: 'none' }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {/* أزرار الترقيم في آخر الصفحة */}
      <div className="pagination">
        {/* زر 1 -> يودي لصفحة Bags */}
        <Link to="/bags"> 
          <button
            onClick={() => handleButtonClick(1)}
            className={`pagination-btn ${activeButton === 1 ? "active" : ""}`}
          >
            1
          </button>
        </Link>

        {/* زر 2 -> يودي لصفحة Pullover */}
        <Link to="/pullovers">
          <button
            onClick={() => handleButtonClick(2)}
            className={`pagination-btn ${activeButton === 2 ? "active" : ""}`}
          >
            2
          </button>
        </Link>

        {/* زر 3 -> يودي لصفحة Shoes */}
        <Link to="/shoes">
          <button
            onClick={() => handleButtonClick(3)}
            className={`pagination-btn ${activeButton === 3 ? "active" : ""}`}
          >
            3
          </button>
        </Link>

        {/* زر 4 -> يودي لصفحة Suit */}
        <Link to="/suits">
          <button
            onClick={() => handleButtonClick(4)}
            className={`pagination-btn ${activeButton === 4 ? "active" : ""}`}
          >
            4
          </button>
        </Link>

        {/* زر 5 */}
        <Link to="/watches">
          <button
            onClick={() => handleButtonClick(5)}
            className={`pagination-btn ${activeButton === 5 ? "active" : ""}`}
          >
            5
          </button>
        </Link>
      </div>
    </>
  );
}