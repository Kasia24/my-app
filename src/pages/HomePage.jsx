import React, { useState } from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // Stan kontrolujący widoczność koszyka

  // Funkcja dodająca produkt do koszyka
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Funkcja wyświetlająca koszyk
  const handleCartClick = () => {
    setShowCart((prevShowCart) => !prevShowCart); // Zmiana stanu widoczności koszyka
  };

  const products = [
    {
      id: 1,
      image: "./images/Natka.jpg",
      title: "Natka pietruszki",
      description: "Naturalne kuchenne mydło do rąk.",
      price: "24,99",
    },
    {
      id: 2,
      image: "./images/Fr_Lawenda.jpg",
      title: "Francuska lawenda",
      description: "Naturalny płyn uniwersalny Francuska lawenda",
      price: "19.99",
    },
    {
      id: 3,
      image: "./images/Wind.jpg",
      title: "Wind",
      description: "Naturalny balsam do ciała Wind odprężenie",
      price: "12.99",
    },
  ];

  return (
    <div className="home-page">
      {/* Przekazujemy liczbę produktów w koszyku i funkcję otwierającą koszyk */}
      <Header cartCount={cart.length} onCartClick={handleCartClick} />
      <ImageSlider />

      {/* Wyświetlanie produktów */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)} // Dodanie produktu do koszyka
          />
        ))}
      </div>

      {/* Jeśli koszyk jest widoczny, wyświetlamy zawartość koszyka */}
      {showCart && (
        <div className="cart">
          <h2>Zawartość koszyka</h2>
          {cart.length === 0 ? (
            <p>Twój koszyk jest pusty.</p>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  <img src={product.image} alt={product.title} width="50" />
                  <span>
                    {product.title} - {product.price} PLN
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
