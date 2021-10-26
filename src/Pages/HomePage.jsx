import { useEffect, useState } from "react";
import ProductsFeed from "../Components/ProductsFeed";

const HomePage = () => {
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
    <div>
      <ProductsFeed products={products} />
    </div>
  );
};

export default HomePage;
