import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useHistory } from "react-router-dom";
import {
  deleteCart,
  selectCartItems,
  selectTotalPrice,
} from "../Redux/cartSlice";
import { selectIsUserLoggedIn } from "../Redux/userSlice";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const onOpenModal = () => setOrderPlaced(true);
  const onCloseModal = () => {
    setOrderPlaced(false);
    dispatch(deleteCart());
    history.replace("/");
  };
  //USE WHEN USING STRIPE
  // const [disabled, setDisabled] = useState(false);
  // const [error, setError] = useState(null);
  // const [processing, setProcessing] = useState(false);
  // const [succeeded, setSucceeded] = useState(false);
  // const [clientSecret, setClientSecret] = useState(true);
  // const stripe = useStripe();
  // const elements = useElements();

  // const handleChange = (event) => {
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  // const getClientSecret = async () => {
  //   const response = await fetch(`/payments/create?total=${totalPrice * 100}`, {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   });
  //   setClientSecret(response.data.clientSecret);
  // };
  // const handleCheckout = async (event) => {
  //   //getClientSecret
  //   const response = await fetch(`/payments/create?total=${totalPrice * 100}`, {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   });
  //   setClientSecret(response.data.clientSecret);

  //   setProcessing(true);

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       card: elements.getElement(CardElement),
  //     })
  //     .then(({ paymentIntent }) => {
  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       history.replaceState("/");
  //     });
  // };

  const handleCheckout = () => {
    onOpenModal();
  };

  return (
    <div className="lg:flex p-5">
      <Modal open={orderPlaced} onClose={onCloseModal} center>
        <div className="w-full h-max md:w-96 flex flex-col items-center justify-between p-0">
          <h2 className="font-semibold text-2xl m-2 ml-0 border-b-2 w-full pb-1 text-center">
            Thanks For Ordering
          </h2>
          <p className="text-lg">Order Placed Successfully</p>
          <p className="font-black">Total Amount: {totalPrice}</p>;
        </div>
      </Modal>
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

            {/* <CardElement className="mt-2" onChange={handleChange} /> */}
            <button
              onClick={handleCheckout}
              disabled={!isUserLoggedIn}
              // disabled={!isUserLoggedIn || processing || disabled || succeeded}
              className={`py-2 px-3 mt-2 bg-black text-white font-semibold rounded ${
                // {!isUserLoggedIn && !disabled}
                !isUserLoggedIn
                  ? "bg-gray-500 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}
            >
              {isUserLoggedIn ? "Buy Now" : "Sign in to checkout"}
              {/* {processing && "Processing..."} */}
              {/* {succeeded && "Payment Succeeded"} */}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
