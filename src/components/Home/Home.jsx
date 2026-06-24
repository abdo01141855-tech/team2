import  "react";
import "./Home.css";
import { Link } from "react-router-dom";

import heroImg from "./assets/unnamed.png";
import card1Img from "./assets/unnamed (1).png";
import card2Img from "./assets/unnamed (2).png";
import card3Img from "./assets/unnamed (3).png";
import studioImg from "./assets/unnamed (4).png";
import leatherImg from "./assets/unnamed (5).png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={ { backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <p>THE SPRING COLLECTION 2026</p>

            <h1>
              Effortless Elegance,
              <br />
              Curated for the
              <br />
              Intentional Soul.
            </h1>

            <div className="hero-buttons">
              <Link to="/shop_all">
                <button className="btn-shop">SHOP NOW</button>
              </Link>

              <Link to="/about">
                <button className="btn-discover">
                  DISCOVER MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="cards-section">
        <div className="left-card">
          <img src={card1Img} alt="Essential Staples" />

          <div className="overlay-text">
            <h3>Essential Staples</h3>
            <p>Timeless pieces for every wardrobe.</p>
          </div>
        </div>

        <div className="right-cards">
          <div className="small-card">
            <img src={card2Img} alt="Seasonal Edits" />

            <div className="overlay-text">
              <h3>Seasonal Edits</h3>
            </div>
          </div>

          <div className="small-card">
            <img src={card3Img} alt="Lumina Gold" />

            <div className="overlay-text">
              <h3>Lumina Gold</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-container">

          <div className="philosophy-images">
            <div className="main-image-wrapper">
              <img
                src={studioImg}
                alt="Design Studio"
                className="main-img"
              />
            </div>

            <div className="sub-image-wrapper">
              <img
                src={leatherImg}
                alt="Lumina Leather"
                className="sub-img"
              />
            </div>
          </div>

          <div className="philosophy-content">
            <span className="subtitle">
              OUR PHILOSOPHY
            </span>

            <h2 className="title">
              Design with purpose, worn with confidence.
            </h2>

            <p className="description">
              LUMINA was founded on the belief that luxury should
              be felt, not just seen. Every piece in our collection
              is meticulously crafted from sustainably sourced
              materials, ensuring that our impact on the world is
              as beautiful as our aesthetic.
            </p>

            <p className="description">
              We don't follow trends; we create foundations.
              Our designers focus on architectural silhouettes
              that transition effortlessly from dawn to dusk,
              allowing you to curate a life that is both
              functional and exquisite.
            </p>

            <a href="#story" className="story-link">
              THE FULL STORY
              <span className="arrow"> → </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}