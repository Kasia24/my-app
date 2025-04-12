import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css"; // Upewnij się, że masz stylowanie

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Greenlandia</span>
      </div>

      {/* Ikony */}
      <div className="icons">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={toggleSearch}
        />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>

      {/* Pole wyszukiwania */}
      {showSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Wyszukaj produkt..."
            className="search-input"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
