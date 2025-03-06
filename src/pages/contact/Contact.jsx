import "./contact.scss";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We love to hear from you! Get in touch with us for any inquiries.</p>

        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>123 Main Street, Brampton, ON</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt />
            <span>+1 (365) 440 3028</span>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <span>support@dwello.com</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
