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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowSearch(false);
  };

  const handleLogin = () => {
    if (email && password) {
      console.log("Logowanie:", { email, password });
      alert(`Zalogowano jako: ${email}`);
      // Można tu wysłać dane do API: fetch('/api/login', { method: 'POST', body: ... })
    } else {
      alert("Wprowadź email i hasło");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Greenlandia</span>
      </div>

      <div className="icons">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={toggleSearch}
        />
        <FontAwesomeIcon icon={faUser} className="icon" onClick={toggleLogin} />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>

      {showSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Wyszukaj produkt..."
            className="search-input"
          />
        </div>
      )}

      {showLogin && (
        <div className="login-box">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Hasło"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Zaloguj się
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
