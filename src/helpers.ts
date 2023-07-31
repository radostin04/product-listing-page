import { Product } from "./types";

export const calculateDiscount = (products: Product[]) => {
  return products.map((el) => {
    if (el.discount) {
      const discountAmount = el.price * (el.discount / 100);
      const finalPrice = +(Math.round((el.price - discountAmount) * 100) / 100).toFixed(2);
      el.price = finalPrice;
      return el;
    } else {
      return el;
    }
  });
};

export const generateIds = (products: Product[]) => {
  return products.map((el, i) => {
    return { ...el, id: i };
  });
};
