import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider"; // <-- dodajesz ten import

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <ImageSlider /> {/* <-- slider zaraz pod nagłówkiem */}
    </div>
  );
};

export default HomePage;
