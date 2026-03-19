import { useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Services", href: "services" },
  { label: "Packages", href: "packages" },
  { label: "Contact Us", href: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

          {/* Logo */}
        <img src={logo} alt="Logo" className="navbar-logo" />

        {/* Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className="navbar-link"
                onClick={() => handleScroll(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className="mobile-link"
                onClick={() => handleScroll(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}