import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cart-slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.cart.items.length);

  function addToCartHandler() {
    dispatch(
      cartAction.addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{product.title}</h3>
          <div className={classes.price}>${product.price.toFixed(2)}</div>
        </header>
        <p>{product.description}</p>
        {/* {cartLength >0 ? (
          <div className={classes.actions}>
            <button>-</button>
            <button>+</button>
          </div>
        ) : ( */}
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
        {/* )} */}
      </Card>
    </li>
  );
};

export default ProductItem;
