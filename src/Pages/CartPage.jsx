import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { selectCartItems } from "../Redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="lg:flex">
      <div className="flex flex-col p-5 flex-grow">
        <h2 className="text-2xl border-b-2 pb-4 font-semibold">
          {cartItems.length > 0 ? "Shopping Cart" : "Your Cart is Empty"}
        </h2>
        <div>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
