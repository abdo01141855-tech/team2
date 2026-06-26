import React, { useState } from "react";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./Watches.css";
import watch1 from "./assets/watch1.jpg";
import watch2 from "./assets/watch2.jpg";
import watch3 from "./assets/watch3.webp";
import watch4 from "./assets/watch4.webp";
import watch5 from "./assets/watch5.webp";
import watch6 from "./assets/watch6.jpg";

function Watches() {
  const [liked, setLiked] = useState([]);

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

  const Heart = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <>
  <Navbar />
    <section className="shop">
      <h1>All Watches</h1>

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

              <button className="add-cart">Add To Cart</button>
            </div>

            <div className="card-info">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer />
</>
  );
}

export default Watches;