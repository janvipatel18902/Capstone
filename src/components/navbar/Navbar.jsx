import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Dwello</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/listPage">Listing</Link>
        <Link to="/singlePage">Property</Link>
        <Link to="/mortgage-calculator">Mortgage Calculator</Link>
        <Link to="/guidance">Guidance for Home-Buyers</Link> {/* Fixed Path */}
      </div>

      <div className="right">
        <Link to="/SignInPage">Sign In</Link>
        <Link to="/SignUpPage" className="register">Sign Up</Link>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/listPage">Listing</Link>
          <Link to="/singlePage">Property</Link>
          <Link to="/mortgage-calculator">Mortgage Calculator</Link>
          <Link to="/guidance">Guidance for Home-Buyers</Link>
          <Link to="/SignInPage">Sign In</Link>
          <Link to="/SignUpPage">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
