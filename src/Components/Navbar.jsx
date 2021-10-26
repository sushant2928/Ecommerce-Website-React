import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../Redux/cartSlice";

const Navbar = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const cartItems = useSelector(selectCartItems);
  const handleAuth = () => {
    console.log("inside Login function");
    console.log(user);
    if (!user) loginWithRedirect().then((user) => console.log(user));
    else logout();
  };
  useEffect(() => {
    console.log(user);
    console.log(cartItems);
  }, [user, cartItems]);
  return (
    <div className="flex justify-around align-middle bg-white px-5 py-3 shadow-md top-0 left-0 sticky z-10">
      <h1 className="text-2xl font-bold w-full">E-Store</h1>
      <ul className="flex justify-around align-middle w-full font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">
          <Link to="/cart">Cart [{cartItems.length}]</Link>
        </li>
        <li>
          <button className="font-semibold" onClick={handleAuth}>
            {!user ? "Sign In" : user.given_name}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
