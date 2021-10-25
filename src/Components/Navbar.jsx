import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-white p-5 shadow-md top-0 left-0 sticky z-10 align-middle ">
      <h1 className="text-2xl font-bold w-full">E-Store</h1>
      <ul className="flex justify-around align-middle w-full font-semibold">
        <li className="border-b-2">
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Sign In</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
