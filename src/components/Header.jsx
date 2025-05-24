import { useState } from "react";
import Logo from "./Logo";
import "../styles/Header.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        
        {/* Mobile menu button (hamburger icon) */}
        <button 
  className="menu-toggle"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  <svg width="24" height="24" viewBox="0 0 24 24">
    {isMenuOpen ? (
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    ) : (
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    )}
  </svg>
</button>

        {/* Navigation menu */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#stack" className="nav-link">Stack</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="contact-button">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;