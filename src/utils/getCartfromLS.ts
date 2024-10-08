// import { CartItem } from "../store/slices/cartSlice";

import { CartItem } from "../store/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("test");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
