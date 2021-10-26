import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import Button from "./Button";

const Product = ({ product }) => {
  const { id, title, price, category, description, image } = product;
  const dispatch = useDispatch();
  const addItemToCart = () => {
    console.log("ADD ITEM TO CART");
    dispatch(addToCart(product));
  };
  return (
    // <div className="p-4 m-4 shadow-md rounded flex flex-col justify-between hover:shadow-xl">
    <div className="p-5 m-5 shadow-md rounded flex flex-col justify-between align-middle hover:shadow-xl max-w-full ">
      <img
        src={image}
        alt="product_image"
        className="w-52 h-52 m-auto object-contain"
      />
      <div className="flex flex-col justify-between">
        <h2 className="pt-2 font-bold">{title}</h2>
        <p className="pt-1">Rs.{price}</p>
        <Button text="Add To Cart" clickHandler={addItemToCart} />
      </div>
    </div>
  );
};

export default Product;
