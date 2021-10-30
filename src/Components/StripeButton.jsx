import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({
  price,
  priceForStripe,
  publishableKey,
  onOpenModal,
  user,
}) => {
  const onToken = (token) => {
    onOpenModal();
  };
  return (
    <StripeCheckout
      label="Buy Now"
      name="Ecommerce Website"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      email={user.email}
    />
  );
};
export default StripeButton;
