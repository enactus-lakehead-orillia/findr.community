import React from "react";
import "./Header.css";
// import logo from 'Assets/images/findr-logo-3.svg';
import logo from "../../assets/images/findr-logo.png";

function Header() {
  // eslint-disable-next-line
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <nav className="navigation-menu">
        <ul>
          <li onClick={() => scrollToSection("about-section")}>About</li>
          <li onClick={() => scrollToSection("contact-section")}>Contact</li>
          <li onClick={() => scrollToSection("privacy-section")}>Privacy</li>
        </ul>
      </nav> */}
      <div style={{ clear: "both" }}></div> {/* Clear float */}
    </header>
  );
}

export default Header;
