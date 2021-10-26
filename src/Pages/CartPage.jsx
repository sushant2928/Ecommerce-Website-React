import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import {
  addToCart,
  selectCartItems,
  selectTotalPrice,
} from "../Redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      // ------API DOESN'T WORK--------
      // fetch('https://fakestoreapi.com/users',{
      //       method:"POST",
      //       body:JSON.stringify(
      //           {
      //               email:'John@gmail.com',
      //               username:'johnd',
      //               password:'m38rmF$',
      //               name:{
      //                   firstname:'John',
      //                   lastname:'Doe'
      //               },
      //               address:{
      //                   city:'kilcoole',
      //                   street:'7835 new road',
      //                   number:3,
      //                   zipcode:'12926-3874',
      //                   geolocation:{
      //                       lat:'-37.3159',
      //                       long:'81.1496'
      //                   }
      //               },
      //               phone:'1-570-236-7033'
      //           }
      //       )
      //   })
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))

      // GET CART ITEMS OF THE LOGGED IN USER
      fetch("https://fakestoreapi.com/carts/user/2")
        .then((res) => res.json())
        .then((json) => {
          if (json.length > 0) {
            for (let product of json[0].products) {
              fetch(`https://fakestoreapi.com/products/${product.productId}`)
                .then((res) => res.json())
                .then((json) => {
                  dispatch(addToCart({ ...json, quantity: product.quantity }));
                });
            }
          }
        });
    }
  }, [user]);

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
              className={`py-2 px-3 mt-2 bg-black text-white rounded ${
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
