import React from "react";
import Product from "./Product";

const ProductsFeed = ({ products }) => {
  return (
    // <div className="flex flex-wrap justify-center">

    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-full">
      {products.slice(0, 4).map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <img
        src="https://m.media-amazon.com/images/I/61p4xgMwlRL.jpg"
        alt="Promotion-Banner"
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsFeed;
