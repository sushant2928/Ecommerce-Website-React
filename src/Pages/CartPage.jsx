import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useHistory } from "react-router-dom";
import {
  deleteCart,
  selectCartItems,
  selectTotalPrice,
} from "../Redux/cartSlice";
import { selectIsUserLoggedIn, selectUser } from "../Redux/userSlice";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import StripeButton from "../Components/StripeButton";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const onOpenModal = () => setOrderPlaced(true);
  const onCloseModal = () => {
    setOrderPlaced(false);
    dispatch(deleteCart());
    history.replace("/");
  };
  const redirectToSignIn = () => {
    history.replace("/authentication");
  };

  return (
    <div className="lg:flex p-5">
      <Modal open={orderPlaced} onClose={onCloseModal} center>
        <div className="w-full h-max md:w-96 flex flex-col items-center justify-between p-0">
          <h2 className="font-semibold text-2xl m-2 ml-0 border-b-2 w-full pb-1 text-center">
            Thanks For Ordering
          </h2>
          <p className="text-lg">Order Placed Successfully</p>
          <p className="font-black">Total Amount: ${totalPrice}</p>;
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
              <span className="font-semibold">${totalPrice}</span>
            </div>

            {isUserLoggedIn ? (
              <>
                <div className="text-red-600 text-base text-center my-2">
                  **Please use the follwing test credit card for payments**:
                  <br />
                  4242-4242-4242-4242 - Exp: 11/2022 - CVV: 123
                </div>
                <StripeButton
                  price={totalPrice}
                  priceForStripe={totalPrice}
                  publishableKey="pk_test_fB3yEouOM4K1CJfj1HGRCqil00DdkiLl0b"
                  onOpenModal={onOpenModal}
                  user={user}
                ></StripeButton>
              </>
            ) : (
              <button
                onClick={redirectToSignIn}
                className={
                  "py-2 px-3 mt-2 bg-black text-white font-semibold rounded hover:opacity-80"
                }
              >
                Sign in to checkout
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
