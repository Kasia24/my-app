import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price} zł</p>
      <button className="add-to-cart" onClick={onAddToCart}>
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductCard;
