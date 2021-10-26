import { useEffect, useState } from "react";
import ProductsFeed from "../Components/ProductsFeed";

const HomePage = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${
        selectedCategory === "All" ? "" : `category/${selectedCategory}`
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, [selectedCategory]);

  return (
    <div>
      <ProductsFeed products={products} />
    </div>
  );
};

export default HomePage;
