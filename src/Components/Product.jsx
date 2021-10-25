import React from "react";

const Product = ({ product }) => {
  const { id, title, price, category, description, image } = product;
  return (
    <div className="product w-64 p-4 m-4 shadow-md rounded flex flex-col justify-between hover:shadow-xl">
      <img
        src={image}
        alt="product_image"
        className="h-48 w-full object-cover object-center"
      />
      <div>
        <h2 className="pt-2 font-bold">{title}</h2>
        <p className="pt-1">Rs.{price}</p>
        <button className="p-1 my-1 bg-black w-full text-white rounded hover:opacity-75">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
