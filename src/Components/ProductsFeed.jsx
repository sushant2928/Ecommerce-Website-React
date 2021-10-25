import React from "react";
import Product from "./Product";

const ProductsFeed = ({ products }) => {
  return (
    <div className="products-feed flex flex-wrap w-full justify-center">
      {products.map((product) => (
        <Product product={product} />
      ))}
      {/* <Product
        product={{
          id: 1,
          title: "iPhone 13",
          price: 83000,
          category: "Mobile",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo labore similique, perferendis accusamus sequi voluptatem, quasi laudantium odio quos autem, nulla dicta assumenda repellendus",
          image:
            "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
        }}
      />
      <Product
        product={{
          id: 1,
          title: "iPhone 13",
          price: 83000,
          category: "Mobile",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo labore similique, perferendis accusamus sequi voluptatem, quasi laudantium odio quos autem, nulla dicta assumenda repellendus",
          image:
            "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
        }}
      /> */}
    </div>
  );
};

export default ProductsFeed;
