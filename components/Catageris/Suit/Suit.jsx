import { useState } from "react";
import { Link } from "react-router-dom";
import "./Suit.css";

import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";

function Suit() {
  const [liked, setLiked] = useState([]);
  const [activeButton, setActiveButton] = useState(4); // 4 = Suit (الصفحة الحالية)

  const products = [
    {
      id: 1,
      title: "Toxedo Suit",
      price: "$3000",
      image: img1,
    },
    {
      id: 2,
      title: "Olive Suit",
      price: "$1000",
      image: img2,
    },
    {
      id: 3,
      title: "Dark Blue Suit",
      price: "$2000",
      image: img3,
    },
    {
      id: 4,
      title: "Brown Suit",
      price: "$3000",
      image: img4,
    },
    {
      id: 5,
      title: "Formal Suit",
      price: "$2500",
      image: img5,
    },
    {
      id: 6,
      title: "Classic Suit",
      price: "$2200",
      image: img6,
    },
  ];

  const Heart = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <section className="shop">
      <h1>All Suits</h1>

      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />

              <button
                className={`heart ${
                  liked.includes(item.id) ? "active" : ""
                }`}
                onClick={() => Heart(item.id)}
              >
                {liked.includes(item.id) ? "♥" : "♡"}
              </button>

              <button className="add-cart">
                Add To Cart
              </button>
            </div>

            <div className="card-info">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
          </div>
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

        {/* زر 5 -> يودي للصفحة الرئيسية */}
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
  );
}

export default Suit;