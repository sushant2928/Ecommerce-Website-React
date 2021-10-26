import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { selectCartItems, selectTotalPrice } from "../Redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const { user } = useAuth0();
  // useEffect(() => {
  //   let temp = 0;
  //   for (let item of cartItems) {
  //     temp += item.price;
  //   }
  //   temp = Math.round((temp + Number.EPSILON) * 100) / 100;
  //   setSubTotal(temp);
  // }, [cartItems]);
  const handleCheckout = () => {
    if (user) {
    } else {
    }
  };
  return (
    <div className="lg:flex p-5">
      <div className="flex flex-col flex-grow flex-1">
        <h2 className="text-2xl border-b-2 pb-4 font-semibold">
          {cartItems.length > 0 ? "Shopping Cart" : "Your Cart is Empty"}
        </h2>
        <div>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:w-96 shadow-md lg:ml-5 p-5">
        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between">
              <h2 className="font-semibold">
                Subtotal [{cartItems.length} items]:
              </h2>
              <span className="font-semibold">Rs.{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={!user}
              className={`py-2 px-3 bg-black text-white rounded ${
                !user ? "bg-gray-500 cursor-not-allowed" : "hover:opacity-80"
              }`}
            >
              {user ? "Checkout" : "Sign in to checkout"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
