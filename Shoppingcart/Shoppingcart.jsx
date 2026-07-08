import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ShoppingCart.css";

import pullover2 from "../../assets/pullover-gray.png";
import pullover5 from "../../assets/pullover-orange.png";
import watch3 from "../../assets/watch3.webp";
import img5 from "../../assets/img5.webp";

const suggestions = [
  { id: "sugg-1", name: "Gray Cashmere Pullover", price: 420, image: pullover2 },
  { id: "sugg-2", name: "Orange Wool Pullover", price: 350, image: pullover5 },
  { id: "sugg-3", name: "Tissot PRX", price: 700, image: watch3 },
  { id: "sugg-4", name: "Formal Suit", price: 2500, image: img5 },
];

function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = cartItems.length === 0 ? 0 : subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Your Shopping Bag</h1>
          <p>
            {itemCount === 0
              ? "Your cart is empty."
              : `There ${itemCount === 1 ? "is" : "are"} ${itemCount} item${
                  itemCount === 1 ? "" : "s"
                } in your cart.`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>You haven't added anything yet.</p>
            <Link to="/Shoes" className="btn-continue">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    {item.subtitle && (
                      <p className="cart-item-meta">{item.subtitle}</p>
                    )}

                    <div className="cart-item-qty">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-side">
                    <span className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Sales Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn-checkout">PROCEED TO CHECKOUT</button>

              <p className="summary-note">🔒 Secure checkout guaranteed</p>
              <p className="summary-note">↺ 30 day returns policy</p>
            </aside>
          </div>
        )}

        <div className="cart-related">
          <div className="cart-related-header">
            <h2>You May Also Like</h2>
            <Link to="/Shoes">EXPLORE ALL</Link>
          </div>

          <div className="cart-related-grid">
            {suggestions.map((item) => (
              <div className="related-card" key={item.id}>
                <div className="related-image-wrap">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className="related-name">{item.name}</p>
                <span className="related-price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-footer">
          <div className="footer-brand">
            <h3>LUMINA</h3>
            <p>
              Curated design for the intentional home. We believe in high
              quality craftsmanship and timeless aesthetics that transcend
              everyday space.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>SHOP</h4>
              <ul>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Furniture</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>SUPPORT</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Shipping Info</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cart-footer-bottom">
          <span>© 2026 LUMINA. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;