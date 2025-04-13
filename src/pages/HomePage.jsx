import React, { useState } from "react"; // importujemy useState
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // Stan do zarządzania widocznością koszyka

  // Funkcja dodająca produkt do koszyka
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`Dodano "${product.title}" do koszyka!`);
  };

  // Funkcja do przełączania widoczności koszyka
  const toggleCartVisibility = () => {
    setShowCart(!showCart);
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
      price: "19,99",
    },
    {
      id: 3,
      image: "./images/Wind.jpg",
      title: "Wind",
      description: "Naturalny balsam do ciała Wind odprężenie",
      price: "12,99",
    },
  ];

  return (
    <div className="home-page">
      <Header cartCount={cart.length} />{" "}
      {/* Przekazujemy liczbę produktów w koszyku */}
      <ImageSlider />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)} // Przekazujemy produkt do funkcji
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
