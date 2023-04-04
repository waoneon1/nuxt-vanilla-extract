import { useContext } from "react";
import {
  cartSummary,
  cartSummaryItem,
  cartSummaryTotal,
  cartSummaryWrapper,
} from "../styles/cart.css";
import Button from "./Button";
import { CartContext } from "./Layout";

const Summary = () => {
  const { cart } = useContext(CartContext);

  const handleCartCount = () => {
    let sumCart = 0;
    cart.map((item) => {
      sumCart += item.count;
    });
    return sumCart;
  };

  const handleCartTotalPrice = () => {
    let sumCart = 0;
    cart.map((item) => {
      sumCart += item.price * item.count;
    });
    return sumCart;
  };

  return (
    <div className={cartSummaryWrapper}>
      <h3>Summary</h3>
      <div className={cartSummary}>
        <div className={cartSummaryItem}>
          <div>Items In the Cart</div>
          <div>{handleCartCount()}</div>
        </div>
        <div className={cartSummaryTotal}>
          <div>Total</div>
          <div>${handleCartTotalPrice()}</div>
        </div>

        <Button onClick={() => console.log("danger")} theme="full">
          Go to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
