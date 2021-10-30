import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    console.log("ADD ITEM TO CART");
    dispatch(addToCart(item));
  };
  const removeItemFromCart = () => {
    console.log("REMOVE ITEM FROM CART");
    const id = item.id;
    console.log("ID", id);
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5 shadow-md p-3 my-5">
      <img
        src={item.image}
        alt="Product_Image"
        className="w-52 h-52 object-contain"
      />
      <div className="col-span-3 mx-5 flex flex-col justify-center">
        <h2 className="pt-2 font-bold">{item.title}</h2>
        <p className="pt-1 text-sm line-clamp-3">{item.description}</p>
        <p className="pt-1 font-semibold">
          ${item.price} x {item.quantity}
        </p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-center">
        <Button text="Add To Cart" clickHandler={addItemToCart} />
        <Button text="Remove From Cart" clickHandler={removeItemFromCart} />
      </div>
    </div>
  );
};

export default CartItem;
