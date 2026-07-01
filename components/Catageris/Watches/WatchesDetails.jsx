import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./WatchesDetails.css";

// استيراد الصور
import watch1 from "./assets/watch1.jpg";
import watch2 from "./assets/watch2.jpg";
import watch3 from "./assets/watch3.webp";
import watch4 from "./assets/watch4.webp";
import watch5 from "./assets/watch5.webp";
import watch6 from "./assets/watch6.jpg";

// بيانات المنتجات
const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    tag: "Luxury Collection",
    price: 850.00,
    image: watch1,
    rating: 5,
    reviews: 48,
    description:
      "Luxury stainless steel watch with premium craftsmanship and timeless elegance.",
    details: [
      "Swiss Automatic Movement",
      "Stainless Steel Case",
      "Water Resistant",
      "2 Years Warranty",
    ],
    badge: {
      label: "Luxury",
      bg: "#f0ebe3",
      color: "#5a4a35",
    },
  },
  {
    id: 2,
    name: "Casio Vintage",
    tag: "Classic Collection",
    price: 120.00,
    image: watch2,
    rating: 4,
    reviews: 32,
    description:
      "Classic digital watch with a timeless vintage style for everyday wear.",
    details: [
      "Digital Display",
      "Water Resistant",
      "Lightweight Design",
      "1 Year Warranty",
    ],
    badge: null,
  },
  {
    id: 3,
    name: "Tissot PRX",
    tag: "Swiss Collection",
    price: 700.00,
    image: watch3,
    rating: 5,
    reviews: 56,
    description:
      "Premium Swiss-made watch featuring a modern integrated bracelet design.",
    details: [
      "Swiss Movement",
      "Sapphire Crystal",
      "Stainless Steel",
      "2 Years Warranty",
    ],
    badge: {
      label: "Swiss",
      bg: "#2d6a4f",
      color: "#a8d5bf",
    },
  },
  {
    id: 4,
    name: "Seiko 5",
    tag: "Automatic Collection",
    price: 300.00,
    image: watch4,
    rating: 4,
    reviews: 41,
    description:
      "Reliable automatic watch with Japanese craftsmanship and classic styling.",
    details: [
      "Automatic Movement",
      "Hardlex Crystal",
      "Water Resistant",
      "2 Years Warranty",
    ],
    badge: null,
  },
  {
    id: 5,
    name: "Citizen Eco-Drive",
    tag: "Eco Collection",
    price: 450.00,
    image: watch5,
    rating: 5,
    reviews: 28,
    description:
      "Powered by light with Eco-Drive technology for endless performance.",
    details: [
      "Eco-Drive Technology",
      "Stainless Steel",
      "Water Resistant",
      "3 Years Warranty",
    ],
    badge: null,
  },
  {
    id: 6,
    name: "Omega Seamaster",
    tag: "Premium Collection",
    price: 2500.00,
    image: watch6,
    rating: 5,
    reviews: 39,
    description:
      "Iconic luxury diving watch with exceptional precision and craftsmanship.",
    details: [
      "Swiss Automatic",
      "300M Water Resistant",
      "Ceramic Bezel",
      "5 Years Warranty",
    ],
    badge: {
      label: "Premium",
      bg: "#e8f4e8",
      color: "#2d6a4f",
    },
  },
];

// ===== دالة لجلب منتجات عشوائية غير المنتج الحالي =====
function getRelatedProducts(currentProductId, count = 4) {
  const otherProducts = products.filter(
    (p) => p.id !== currentProductId
  );

  const shuffled = [...otherProducts].sort(
    () => 0.5 - Math.random()
  );

  return shuffled.slice(0, count);
}

function WatchesDetails() {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("details");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  const relatedProducts = getRelatedProducts(
    parseInt(id),
    4
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>

        <Link to="/watches">
          Back to Shop
        </Link>
      </div>
    );
  }

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="product-page">
      <div className="product-container">

        <div className="breadcrumb">
          <Link to="/">Home</Link> /
          <Link to="/watches"> Watches</Link> /
          <span>{product.name}</span>
        </div>
        <div className="product-main">

          <div className="product-image-wrapper">

            <div className="product-image-container">

              <img
                src={product.image}
                alt={product.name}
                className="product-image-main"
              />

              {product.badge && (
                <span
                  className="product-badge"
                  style={{
                    background: product.badge.bg,
                    color: product.badge.color,
                  }}
                >
                  {product.badge.label}
                </span>
              )}

            </div>

          </div>

          <div className="product-info">

            <span className="product-tag">
              {product.tag}
            </span>

            <h1 className="product-title">
              {product.name}
            </h1>

            <div className="product-rating">

              <span className="stars">
                {renderStars(product.rating)}
              </span>

              <span className="reviews">
                ({product.reviews} reviews)
              </span>

            </div>

            <span className="product-price">
              ${product.price.toFixed(2)}
            </span>

            <p className="product-description">
              {product.description}
            </p>

            <div className="product-actions">

              <Link to="/watches">
                <button className="btn-shop-now">
                  SHOP NOW
                </button>
              </Link>

              <button className="btn-add-cart">
                ADD TO CART
              </button>

              <button className="btn-buy-now">
                BUY NOW
              </button>

            </div>

            <button
              className={`btn-wishlist ${
                isWishlisted ? "active" : ""
              }`}
              onClick={() =>
                setIsWishlisted(!isWishlisted)
              }
            >
              {isWishlisted ? "❤" : "♡"} ADD TO WISHLIST
            </button>

            <div className="product-tabs">

              <button
                className={`tab-btn ${
                  activeTab === "details"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("details")
                }
              >
                PRODUCT DETAILS
              </button>

              <button
                className={`tab-btn ${
                  activeTab === "shipping"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("shipping")
                }
              >
                SHIPPING & RETURNS
              </button>

            </div>

            <div className="tab-content">

              {activeTab === "details" && (

                <ul className="details-list">

                  {product.details.map(
                    (detail, index) => (

                      <li key={index}>
                        {detail}
                      </li>

                    )
                  )}

                </ul>

              )}

              {activeTab === "shipping" && (

                <div className="shipping-info">

                  <p>
                    Free shipping on orders over $500.
                  </p>

                  <p>
                    Returns accepted within 30 days of delivery.
                  </p>

                  <p>
                    International shipping available.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>
        {/* ===== المنتجات المقترحة ===== */}

        <div className="related-products">

          <h2 className="related-title">
            CURATED FOR YOU
          </h2>

          <p className="related-subtitle">
            Complete the Look
          </p>

          <div className="related-grid">

            {relatedProducts.map((item) => (

              <Link
                to={`/watch/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none" }}
              >

                <div className="related-card">

                  <div className="related-image-wrap">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="related-image"
                    />

                  </div>

                  <div className="related-info">

                    <p className="related-name">
                      {item.name}
                    </p>

                    <span className="related-price">
                      ${item.price.toFixed(2)}
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

        <div className="product-footer">

          <div className="footer-brand">

            <h3>LUMINA</h3>

            <p>
              Crafting modern heirlooms for the conscious
              individual. Sustainable luxury without
              compromise.
            </p>

          </div>

          <div className="footer-links">

            <div className="footer-col">

              <h4>CUSTOMER CARE</h4>

              <ul>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>Terms of Service</li>
              </ul>

            </div>

            <div className="footer-col">

              <h4>LEGAL</h4>

              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default WatchesDetails;