import { useState, useEffect } from "react";
import "./ImageSlider.css"; // style za chwilkę

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // co 3 sekundy

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[current]} alt="slajd" className="slide-image" />
    </div>
  );
}
