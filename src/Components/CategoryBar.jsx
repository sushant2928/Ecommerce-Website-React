import React, { useEffect, useState } from "react";

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCategories(["All", ...json]);
      });
  }, []);
  return (
    <div className="flex flex-wrap md:flex-row px-3 py-2 bg-gray-100 font-semibold max-w-full">
      {categories.map((category) => (
        <div
          className={`mr-2 my-1 text-xs px-2 py-1 border border-black rounded cursor-pointer capitalize ${
            selectedCategory === category && "bg-black text-white"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
