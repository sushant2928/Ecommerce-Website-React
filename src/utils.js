export const calculateTotalPrice = (cartItems) => {
  let totalPrice = 0;
  for (let item of cartItems) {
    totalPrice += item.price * item.quantity;
  }
  return Math.round((totalPrice + Number.EPSILON) * 100) / 100;
};

export const findItemIndex = (state, action) => {
  const index = state.items.findIndex((item) => {
    return item.id === action.payload.id;
  });
  return index;
};
