import { useEffect, useState } from "react";
import "./App.css";
import Product from "./Components/Product";
import ProductsFeed from "./Components/ProductsFeed";
import Navbar from "./Components/Navbar.jsx";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <ProductsFeed products={products} />
    </div>
  );
}

export default App;
