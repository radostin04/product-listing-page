import { createContext, useContext, useEffect, useState } from "react";

import { calculateDiscount, generateIds } from "../helpers";
import { Product } from "../types";

import categories from "../products/categories.json";

import shirtsMen from "../products/shirts-men.json";
import shoesMen from "../products/shoes-men.json";
import dressesWomen from "../products/dresses-women.json";
import shoesWomen from "../products/shoes-women.json";

interface ProductsContextType {
  availableCategories: { name: string; id: string; url: string; description: string }[];
  activeCategory?: { name: string; id: string; description: string };
  filteredProducts: Product[];
  allProducts: Product[];
  activateCategory: (id: string) => void;
  filterProducts: (priceRange?: number[], color?: string) => void;
  resetFilters: () => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsContextProvider = (props: { children: React.ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<
    { name: string; id: string; description: string } | undefined
  >(undefined);
  const [allProducts, setAllProduts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const availableCategories = categories;

  useEffect(() => {
    activateCategory("shirtsMen");
    //we don't want this to run more than once
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activateCategory = (id: string) => {
    const found = availableCategories.find((el) => el.id === id);
    if (!found) throw new Error("Category not found!");
    //because we are not making network requests, dynamically choosing the
    //category to load based on it's entry in categories.json would be quite hard
    //if the project were to be deployed on a server, this should be changed,
    //but this is the simplest solution for using local data
    switch (found.id) {
      case "shirtsMen":
        const finalShitsMen = calculateDiscount(generateIds(shirtsMen));
        setActiveCategory({ name: found.name, id: found.id, description: found.description });
        setAllProduts(finalShitsMen);
        //we want to show an unfiltered list when we first enter a category
        setFilteredProducts(finalShitsMen);
        break;
      case "shoesMen":
        const finalShoesMen = calculateDiscount(generateIds(shoesMen));
        setActiveCategory({ name: found.name, id: found.id, description: found.description });
        setAllProduts(finalShoesMen);
        setFilteredProducts(finalShoesMen);
        break;
      case "dressesWomen":
        const finalDressesWomen = calculateDiscount(generateIds(dressesWomen));
        setActiveCategory({ name: found.name, id: found.id, description: found.description });
        setAllProduts(finalDressesWomen);
        setFilteredProducts(finalDressesWomen);
        break;
      case "shoesWomen":
        const finalShoesWomen = calculateDiscount(generateIds(shoesWomen));
        setActiveCategory({ name: found.name, id: found.id, description: found.description });
        setAllProduts(finalShoesWomen);
        setFilteredProducts(finalShoesWomen);
        break;
    }
  };

  const filterProducts = (priceRange?: number[], color?: string) => {
    setFilteredProducts((prev) => {
      let newProducts = [...prev];

      if (priceRange) {
        newProducts = newProducts.filter((el) => {
          return Math.round(el.price) >= priceRange[0] && Math.round(el.price) <= priceRange[1];
        });
      }
      if (color) {
        newProducts = newProducts.filter((el) => {
          return el.color === color;
        });
      }
      return newProducts;
    });
  };

  const resetFilters = () => {
    setFilteredProducts(allProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        availableCategories,
        activeCategory,
        filteredProducts,
        allProducts,
        activateCategory,
        filterProducts,
        resetFilters,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  const checkContext = useContext(ProductsContext);
  if (!checkContext) {
    throw new Error("no ProductsContext.Provider found when calling useNotificationContext");
  }
  return ProductsContext as React.Context<ProductsContextType>;
};

export default useProductsContext;
