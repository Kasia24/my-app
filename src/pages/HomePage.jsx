import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider"; // <-- dodajesz ten import
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <ImageSlider /> {/* <-- slider zaraz pod nagłówkiem */}
      <ProductCard />
    </div>
  );
};

export default HomePage;
