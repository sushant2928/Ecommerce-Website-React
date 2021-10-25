import React from "react";

const Product = ({ product }) => {
  const { id, title, price, category, description, image } = product;
  return (
    // <div className="p-4 m-4 shadow-md rounded flex flex-col justify-between hover:shadow-xl">
    <div className="p-5 m-5 shadow-md rounded flex flex-col justify-between align-middle hover:shadow-xl ">
      <img
        src={image}
        alt="product_image"
        className="w-52 h-52 m-auto object-contain"
      />
      <div className="flex flex-col justify-between">
        <h2 className="pt-2 font-bold">{title}</h2>
        <p className="pt-1">Rs.{price}</p>
        <button className="p-1 my-1 bg-black w-full text-white font-semibold rounded hover:bg-opacity-80">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
