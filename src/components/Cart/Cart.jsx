import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.length ? (
          cartItem.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <li className={classes["empty-message"]}>No items in the cart.</li>
        )}
      </ul>
    </Card>
  );
};

export default Cart;
