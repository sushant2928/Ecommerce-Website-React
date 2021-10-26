import { useEffect, useState } from "react";
import CategoryBar from "../Components/CategoryBar";
import ProductsFeed from "../Components/ProductsFeed";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
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
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsFeed products={products} />
    </div>
  );
};

export default HomePage;
