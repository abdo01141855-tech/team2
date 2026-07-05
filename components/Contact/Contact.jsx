import "./Contact.css";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left */}
        <div className="contact-left">
          <h1>Send a Message</h1>

          <div className="row">
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="input-box">
              <label>Email Address</label>
              <input type="email" placeholder="Gmail@example.com" />
            </div>
          </div>

          <div className="input-box">
            <label>Subject</label>

            <select>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Order</option>
            </select>
          </div>

          <div className="input-box">
            <label>Message</label>

            <textarea
              rows="6"
              placeholder="How can we help you today?"
            ></textarea>
          </div>

          <button className="submit-btn">
            SUBMIT MESSAGE
          </button>
        </div>

        {/* Right */}
        <div className="contact-right">

          <h2>Direct Contact</h2>

          <div className="info">

            <div className="info-item">
              <MdEmail className="icon" />

              <div>
                <span>Email Us</span>

                <p>concierge@lumina-studio.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="icon" />

              <div>
                <span>Call Us</span>

                <p>+1 (212) 555-0198</p>
              </div>
            </div>

            <div className="info-item">
              <FaLocationDot className="icon" />

              <div>
                <span>Studio Address</span>

                <p>422 Mercer St, New York, NY 10003</p>
              </div>
            </div>

          </div>

          <div className="socials">
            <div className="social">
              <FaFacebookF />
            </div>

            <div className="social">
              <FaInstagram />
            </div>
          </div>

          <div className="map">

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;