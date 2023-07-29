import { useContext, useState } from "react";
import useNotificationContext from "../../store/notifications-context";
import { Product } from "../../types";
import ProductTile from "../productTile/productTile";
import classes from "./productGrid.module.css";
import LoadMore from "./loadMore";

const ProductGrid: React.FC<{products: Product[]}> = ({products}) => {
  const notificationsCtx = useContext(useNotificationContext());

  const [loadedProducts, setLoadedProducts] = useState(12);

  const trimmedProducts = [...products]

  let productsWereRemoved = false;
  if (loadedProducts < trimmedProducts.length) {
    productsWereRemoved = true;
    trimmedProducts.length = loadedProducts
  }

  const loadMoreHandler = () => {
    setLoadedProducts(old => old + 12)
  }

  return (
    <div>
      <p className={classes.productCounter}>{`Showing ${trimmedProducts.length} of ${products.length}`}</p>
      {products.length > 0 ? (
      <div className={classes.productGrid}>
        {trimmedProducts.map((el, i) => {
          return <ProductTile
          key={el.id}
          name={el.name}
          description={el.description}
          price={el.price}
          image={el.image}
          rating={el.rating}
          discount={el.discount}
          onClickButton={() => {notificationsCtx.addNotification({timeout: 10, text:"Product added to cart!"})}}
          />
        })}
      </div>) : <p>No products found!</p> }
      {productsWereRemoved ? <LoadMore onClick={loadMoreHandler} /> : null}
    </div>
  )
}

export default ProductGrid;
