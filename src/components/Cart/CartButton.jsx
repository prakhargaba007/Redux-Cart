import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();

  function toggleartHandler(arams) {
    dispatch(uiAction.toggle());
  }

  const cartQuantity = useSelector((state) => state.cart.items.length);
  return (
    <button onClick={toggleartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
