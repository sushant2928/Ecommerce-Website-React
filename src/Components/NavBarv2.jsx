import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../Redux/cartSlice";

const Navbar2 = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const cartItems = useSelector(selectCartItems);
  const handleAuth = () => {
    console.log("inside Login function");
    console.log(user);
    // if (!user) loginWithPopup().then((user) => console.log(user));
    if (!isAuthenticated) loginWithPopup().then((user) => console.log(user));
    else logout();
  };
  useEffect(() => {
    console.log(user);
    console.log(cartItems);
  }, [user, cartItems]);
  return (
    <>
      <div className="flex justify-evenly align-middle bg-white py-2 px-5 shadow-md top-0 left-0 sticky z-10 max-w-full">
        <h1 className="text-xl md:text-2xl font-bold w-full">E-Store</h1>
        <ul className="flex justify-evenly align-middle w-full font-semibold text-base">
          <li className="my-auto">
            <Link to="/">
              <span className="hidden md:inline">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>
          {/* <li className="my-auto cursor-pointer">
          <span className="hidden md:inline">Categories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </li> */}
          <li className="cursor-pointer my-auto" onClick={handleAuth}>
            <div className="font-semibold hidden md:inline">
              {!isAuthenticated ? "Sign In" : user.given_name}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li className="cursor-pointer my-auto">
            <Link to="/cart">
              {/* <span className="hidden md:inline">Cart [{cartItems.length}]</span> */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>{cartItems.length}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
