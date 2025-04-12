import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowLogin(false); // Ukryj login, jeśli otworzono search
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowSearch(false); // Ukryj search, jeśli otworzono login
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Greenlandia</span>
      </div>

      {/* Ikony */}
      <div className="icons">
        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={toggleSearch}
        />
        <FontAwesomeIcon icon={faUser} className="icon" onClick={toggleLogin} />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faBars} className="icon" />
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

      {/* Formularz logowania */}
      {showLogin && (
        <div className="login-box">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Hasło" className="login-input" />
          <button className="login-button">Zaloguj się</button>
        </div>
      )}
    </header>
  );
};

export default Header;
