import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(
      cartAction.addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
      })
    );
  }
  function removeToCartHandler() {
    dispatch(cartAction.removeItemFromCart(item.id));
  }

  return (
    <li key={item.id} className={classes.item}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeToCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
// const CartItem = (props) => {
//   const dispatch = useDispatch();

//   const { title, quantity, total, price, id } = props.item;

//   const removeItemHandler = () => {
//     dispatch(cartAction.removeItemFromCart(id));
//   };

//   const addItemHandler = () => {
//     dispatch(
//       cartAction.addItemToCart({
//         id,
//         title,
//         price,
//       })
//     );
//   };

//   return (
//     <li className={classes.item}>
//       <header>
//         <h3>{title}</h3>
//         <div className={classes.price}>
//           ${total.toFixed(2)}{" "}
//           <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
//         </div>
//       </header>
//       <div className={classes.details}>
//         <div className={classes.quantity}>
//           x <span>{quantity}</span>
//         </div>
//         <div className={classes.actions}>
//           <button onClick={removeItemHandler}>-</button>
//           <button onClick={addItemHandler}>+</button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;
