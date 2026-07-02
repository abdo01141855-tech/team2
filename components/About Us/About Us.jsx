import React from 'react';
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./About Us.css";

import hero from "./assets/hero.png";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";

 
 export default function About () {
   return (
<>
  <Navbar />
    <main className="about">
      <section
  className="hero"
  style={{ backgroundImage: `url(${hero1})` }}
>
  <div className="hero-content">
    <span className="hero-subtitle">ESTABLISHED 2018</span>

    <h1>Designing for a more intentional life</h1>

    <p>
      LUMINA was born from a desire to strip away the noise and
      focus on quality, utility and timeless beauty.
    </p>
  </div>
</section>
        <section className="mission container">
            <div className="mission-text">

             <h5>OUR MISSION</h5>
             <h2>
              Redefining the relationship between space and object.
             </h2>
             <p>
              We believe the objects around us affect our everyday life.
              Every LUMINA piece combines elegant design with practical
              functionality.
             </p>
             <p>
              Our products are carefully designed to create calm,
              simplicity and comfort in modern homes.
             </p>
            </div>
            <div className="mission-images">
                <img src={hero} alt="Mission" />
                   <img src={hero2} alt="Mission" />

            </div>




        </section>

      <section className="craft container">
          <div className="craft-image">
            <img src={hero3} alt="Craft" />
          </div>
           


          <div className="craft-text">
            <h5>OUR CRAFTSMANSHIP</h5>
            <h2>     The precision of modern technology,
          the soul of hand-finishing.</h2>
            <p>       Every piece is made with premium materials and finished by skilled
          artisans to ensure exceptional quality and timeless elegance.</p>
            <ul>
             <li>
  <span className="material-symbols-outlined">verified</span>

  <div className="craft-item">
    <h4>Ethically Sourced Materials</h4>
    <p>We choose high-quality materials from trusted suppliers.</p>
  </div>
</li>

<li>
  <span className="material-symbols-outlined">
    precision_manufacturing
  </span>

  <div className="craft-item">
    <h4>Heirloom Quality</h4>
    <p>
      Our products are designed to last for years with outstanding
      craftsmanship.
    </p>
  </div>
</li>
            </ul>
          </div>
         
          
      </section>

    <section className="sustainability">

    <div className="container">
      <h5>SUSTAINABILITY</h5>
       <h2>  Conscious creation for a better future.</h2>

           



    
    <div className="cards"> 
    <div className="card-card"> 
     <span className="material-symbols-outlined">eco</span>

         <h3>Eco Materials</h3>
    <p>Recycled and environmentally friendly resources.</p>
               </div>
    
    <div className="card-card">
         
<span className="material-symbols-outlined">package_2</span>
               <h3>Plastic Free</h3>
        <p>       100% recyclable packaging for every order.</p>
    </div>
    
    <div className="card-card">
         
<span className="material-symbols-outlined">cycle</span>
  <h3>Circular Lifecycle</h3>
  <p>Repair and recycling programs.</p>
       </div>         
    </div>
</div>
   

    </section>
    <section className="newsletter">
        <div className="container">
            <h2>Join the Collective</h2>
            <p> Receive updates about new collections and exclusive offers.</p>
            <form>
                <input
                type="email" placeholder="Your Email"/>
                     <button>Subscribe</button>
            </form>
        </div>
 




    </section>



    </main>








    <Footer/>
    </>
   );
 }
 