import { useContext } from "react";
import useNotificationContext from "../../store/notifications-context";
import { Product } from "../../types";
import ProductTile from "../productTile/productTile";
import classes from "./productGrid.module.css";

const ProductGrid: React.FC<{products: Product[]}> = ({products}) => {
  const notificationsCtx = useContext(useNotificationContext());

  return (
    <div className={classes.productGrid}>
      {products.map((el, i) => {
        return <ProductTile
        name={el.name}
        description={el.description}
        price={el.price}
        image={el.image}
        rating={el.rating}
        discount={el.discount}
        onClickButton={() => {notificationsCtx.addNotification({timeout: 10, text:"Product added to cart!"})}}
        />
      })}
    </div>
  )
}

export default ProductGrid;
