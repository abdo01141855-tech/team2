import { useState } from "react";
import { Link } from "react-router-dom"; // ← أضف هذا الاستيراد
import "./Bag.css";

import img1 from "../Bags/assets/bag1.webp";
import img3 from "../Bags/assets/bag2.webp";
import img2 from "../Bags/assets/bag3.webp";
import img4 from "../Bags/assets/bag4.webp";
import img5 from "../Bags/assets/bag5.webp";
import img6 from "../Bags/assets/bag6.jpg";

function Bag() {
  const [liked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      title: "White Bag",
      price: "$300",
      image: img1,
    },
    {
      id: 2,
      title: "Light Beige Bag",
      price: "$350",
      image: img2,
    },
    {
      id: 3,
      title: "Brown Bag",
      price: "$400",
      image: img3,
    },
    {
      id: 4,
      title: "Brown Bag",
      price: "$350",
      image: img4,
    },
    {
      id: 5,
      title: "Black Bag",
      price: "$500",
      image: img5,
    },
    {
      id: 6,
      title: "Black Bag",
      price: "$450",
      image: img6,
    },
  ];

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="shop">
      <h1>Bags All</h1>

      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />

              <button
                className={`heart ${
                  liked.includes(item.id) ? "active" : ""
                }`}
                // eslint-disable-next-line no-undef
                onClick={() => toggleHeart(item.id)}
              >
                {liked.includes(item.id) ? "♥" : "♡"}
              </button>
            </div>

            <div className="card-info">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار الترقيم */}
      <div className="pagination">
        {/* زر 1 */}
        <Link to="/bags"> 
        <button
          onClick={() => goToPage(1)}
          className={`pagination-btn ${currentPage === 1 ? "active" : ""}`}
        >
          1
        </button>
        </Link>

        {/* زر 2 -> يودي لصفحة Pullover */}
        <Link to="/pullovers">
          <button
            className="pagination-btn"
          >
            2
          </button>
        </Link>

        {/* زر 3 */}
        <Link to="/shoes">
        <button
          onClick={() => goToPage(3)}
          className={`pagination-btn ${currentPage === 3 ? "active" : ""}`}
        >
          3
        </button>
        </Link>

        {/* زر 4 */}
        <Link to="/suit">
        <button
          onClick={() => goToPage(4)}
          className={`pagination-btn ${currentPage === 4 ? "active" : ""}`}
        >
          4
        </button>
        </Link>
        {/* زر 5 */}
        
        <button to="/watches"
          onClick={() => goToPage(5)}
          className={`pagination-btn ${currentPage === 5 ? "active" : ""}`}
        >
          5
        </button>
      </div>
    </section>
  );
}

export default Bag;