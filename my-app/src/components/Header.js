import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Greenlandia</span>
      </div>

      {/* Ikony */}
      <div className="icons">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>
    </header>
  );
};

export default Header;
