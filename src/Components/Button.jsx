import React from "react";

const Button = ({ clickHandler, text }) => {
  return (
    <button
      onClick={clickHandler}
      className="p-1 my-1 bg-black w-full text-white font-semibold rounded hover:bg-opacity-80"
    >
      {text}
    </button>
  );
};

export default Button;
