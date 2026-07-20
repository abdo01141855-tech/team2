import { useState } from "react";
import { Link } from "react-router-dom";
import "./Watches.css";

import watch1 from "./assets/watch1.jpg";
import watch2 from "./assets/watch2.jpg";
import watch3 from "./assets/watch3.webp";
import watch4 from "./assets/watch4.webp";
import watch5 from "./assets/watch5.webp";
import watch6 from "./assets/watch6.jpg";

const products = [
  {
    id: 1,
    title: "Rolex Submariner",
    price: "$850",
    image: watch1,
  },
  {
    id: 2,
    title: "Casio Vintage",
    price: "$120",
    image: watch2,
  },
  {
    id: 3,
    title: "Tissot PRX",
    price: "$700",
    image: watch3,
  },
  {
    id: 4,
    title: "Seiko 5",
    price: "$300",
    image: watch4,
  },
  {
    id: 5,
    title: "Citizen Eco-Drive",
    price: "$450",
    image: watch5,
  },
  {
    id: 6,
    title: "Omega Seamaster",
    price: "$2500",
    image: watch6,
  },
];

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <div className="image-box">
        <img src={product.image} alt={product.title} />

        <button
          className={`heart ${liked ? "active" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "♥" : "♡"}
        </button>

        <button className="add-cart">Add To Cart</button>
      </div>

      <div className="card-info">
        <h3>{product.title}</h3>
        <span>{product.price}</span>
      </div>
    </div>
  );
}

export default function Watches() {
  const [activeButton, setActiveButton] = useState(5); // 5 = Watches (الصفحة الحالية)

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <section className="shop">
        <h1>All Watches</h1>

        <div className="cards">
          {products.map((product) => (
           
            <Link
              to={`/watch/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
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

          {/* زر 2 -> يودي لصفحة Pullovers */}
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
      </section>
    </>
  );
}
