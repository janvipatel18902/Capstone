import "./footer.scss";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Dwello Logo" />
          <h2>Dwello</h2>
        </div>

        {/* Right Section - Navigation */}
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/listPage">List Layout</a>
          <a href="/mortgage-calculator">Mortgage Calculator</a>
          <a href="/guidance">Guidance</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      {/* Bottom Section - Copyright & Socials */}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 Dwello. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
