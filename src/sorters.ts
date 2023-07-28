import { Product } from "./types";

export const sortAZ = (products: Product[]) => {
  const sortedProducts = [...products]
  sortedProducts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
  });
  return sortedProducts;
}

export const sortZA = (products: Product[]) => {
  const sortedProducts = [...products]
  sortedProducts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA > nameB ? -1 : nameA < nameB ? 1 : 0
  });
  return sortedProducts;
}

export const sortPriceAsc = (products: Product[]) => {
  const sortedProducts = [...products]
  sortedProducts.sort((a, b) => {
    return a.price - b.price
  });
  return sortedProducts;
}

export const sortPriceDec = (products: Product[]) => {
  const sortedProducts = [...products]
  sortedProducts.sort((a, b) => {
    return b.price - a.price
  });
  return sortedProducts;
}