import "./Bag.css";
import { useState } from "react";

import img1 from "../../assets/13989215.webp";
import img2 from "../../assets/14141523.webp";
import img3 from "../../assets/14141525.webp";
import img4 from "../../assets/BaseTransform1_6c1671a3-486f-4f43-8ca7-d9b2983c4d6c.webp";
import img5 from "../../assets/BaseTransform1_63e5d226-5a09-413e-aa70-0780c81d2e74.webp";
import img6 from "../../assets/HWBG9672140_CLO_01.jpg";

function Bag() {
  const [liked, setLiked] = useState([]);

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

  const Heart = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
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
    </section>
  );
}

export default Bag;