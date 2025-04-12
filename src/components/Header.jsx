import React, { useState, useEffect } from "react";
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
  const [showRegister, setShowRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // aktualnie zalogowany

  // Załaduj użytkownika z localStorage po załadowaniu komponentu
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowLogin(false);
    setShowRegister(false);
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowSearch(false);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
    setShowSearch(false);
    setShowLogin(false);
  };

  const handleLogin = () => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert(`Zalogowano jako: ${email}`);
      setShowLogin(false);
    } else {
      alert("Nieprawidłowy email lub hasło");
    }
  };

  const handleRegister = () => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = savedUsers.some((u) => u.email === email);
    if (userExists) {
      alert("Użytkownik już istnieje");
      return;
    }
    const newUser = { email, password };
    const updatedUsers = [...savedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Rejestracja zakończona!");
    setShowRegister(false);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Greenlandia</span>
      </div>

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

      {/* Komponenty po kliknięciu */}
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
          <button className="register-switch" onClick={toggleRegister}>
            Nie masz konta? Zarejestruj się
          </button>
        </div>
      )}

      {showRegister && (
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
          <button className="login-button" onClick={handleRegister}>
            Zarejestruj się
          </button>
          <button className="register-switch" onClick={toggleLogin}>
            Masz już konto? Zaloguj się
          </button>
        </div>
      )}

      {/* Informacja o użytkowniku */}
      {user && (
        <div className="user-info">
          <span>
            Cześć, <strong>{user.email}</strong>
          </span>
          <button className="logout-button" onClick={handleLogout}>
            Wyloguj się
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
