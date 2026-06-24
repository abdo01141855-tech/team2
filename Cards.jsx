import "./Cards.css";

function Cards() {
  return (
    <section className="cards-section">
      <div className="left-card">
        <img src="/src/assets/unnamed (1).png" alt="" />

        <div className="overlay-text">
          <h3>Essential Staples</h3>
          <p>Timeless pieces for every wardrobe.</p>
        </div>
      </div>

      <div className="right-cards">
        <div className="small-card">
          <img src="/src/assets/unnamed (3).png" alt="" />

          <div className="overlay-text">
            <h3>Seasonal Edits</h3>
          </div>
        </div>

        <div className="small-card">
          <img src="/src/assets/unnamed (4).png" alt="" />

          <div className="overlay-text">
            <h3>Lumina Gold</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;