import "./Hero.css";
import hero from "../assets/unnamed.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
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
            <button className="btn-shop">SHOP NOW</button>
            <button className="btn-discover">DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;