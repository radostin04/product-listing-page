import { useCallback, useContext, useState } from "react";

import useNotificationContext from "../../store/notifications-context";
import ProductTile from "../productTile/productTile";
import LoadMore from "./loadMore";

import { Product } from "../../types";

import classes from "./productGrid.module.css";

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  const notificationsCtx = useContext(useNotificationContext());

  const [loadedProducts, setLoadedProducts] = useState(12);

  const trimmedProducts = [...products];

  //Track if the list of total products is longer than how many we show
  let productsWereRemoved = false;
  if (loadedProducts < trimmedProducts.length) {
    productsWereRemoved = true;
    trimmedProducts.length = loadedProducts;
  }

  const loadMoreHandler = () => {
    setLoadedProducts((old) => old + 12);
  };

  const clickButtonHandler = useCallback(() => {
    notificationsCtx.addNotification({ timeout: 10, text: "Product added to cart!" });
    //the addNotification function will never change it's contents - don't include it
    //for performance reasons
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p
        className={classes.productCounter}
      >{`Showing ${trimmedProducts.length} of ${products.length}`}</p>
      {products.length > 0 ? (
        <div className={classes.productGrid}>
          {trimmedProducts.map((el, i) => {
            return (
              <ProductTile
                key={el.id}
                name={el.name}
                description={el.description}
                price={el.price}
                image={el.image}
                rating={el.rating}
                discount={el.discount}
                onClickButton={clickButtonHandler}
              />
            );
          })}
        </div>
      ) : (
        <p>No products found!</p>
      )}
      {productsWereRemoved ? <LoadMore onClick={loadMoreHandler} /> : null}
    </div>
  );
};

export default ProductGrid;
