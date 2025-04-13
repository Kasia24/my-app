import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [cart, setCart] = useState([]);

  // Funkcja dodająca produkt do koszyka
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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

const HomePage = () => {
  const handleAddToCart = (productTitle) => {
    alert(`Dodano "${productTitle}" do koszyka!`);
  };

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
            onAddToCart={() => handleAddToCart(product.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
