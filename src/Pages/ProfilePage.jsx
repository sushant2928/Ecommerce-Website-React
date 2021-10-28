import React from "react";
import { logOutAll } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser, selectIsUserLoggedIn } from "../Redux/userSlice";
import { Redirect } from "react-router";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const handleLogout = () => {
    logOutAll();
  };
  return (
    <div className="flex justify-center items-center w-screen h-96">
      {!isUserLoggedIn ? (
        <Redirect to="/authentication" />
      ) : (
        <div className="shadow-md flex flex-col p-5 w-full m-2 sm:w-1/2 md:w-1/3">
          <label className="font-semibold text-xl m-1 mb-0.5" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={user.displayName}
            className="text-lg m-1 mt-0.5 bg-transparent border-b"
            disabled
          />
          <label className="font-semibold text-xl m-1 mb-0.5" htmlFor="email">
            Email
          </label>
          <input
            name="name"
            type="email"
            value={user.email}
            className="text-lg m-1 mt-0.5 bg-transparent border-b"
            disabled
          />
          <button
            className="bg-black rounded text-white font-semibold mx-1 my-2 py-1 px-2 w-max"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
