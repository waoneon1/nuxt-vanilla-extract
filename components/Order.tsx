import Link from "next/link";
import { ReactNode, useContext, useState } from "react";
import { btnWrapper, btn } from "./button.css";
import Image from "next/image";
import {
  cartOrder,
  cartOrderItem,
  cartOrderCount,
  cartOrderInc,
  cartOrderTrash,
} from "../styles/cart.css";
import Button from "./Button";
import { CartContext, Product } from "./Layout";
var _ = require("lodash");

interface Props {
  product: Product;
}
const Order = ({ product }: Props) => {
  //const [productTotal, setProductTotal] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const handleSetCart = (increment) => {
    const createCart = [...cart].filter((item) => {
      if (item.id === product.id) {
        item.count += increment;
      }
      if (item.count <= 0 || (increment === 0 && item.id === product.id)) {
        confirm("Sure to Delete Product?");
        return false;
      }
      return item;
    });
    setCart(createCart);
  };

  return (
    <div className={cartOrder}>
      <div
        style={{
          flex: "none",
          backgroundImage: `url('${product.image}')`,
          width: 100,
          height: 130,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={cartOrderItem}>
        <h4>{product.title}</h4>
        <span style={{ paddingRight: 40, fontSize: 12, color: "gray" }}>
          {product.description}
        </span>
        <p>
          <strong>{product.category}</strong>
        </p>
        <div className={cartOrderInc}>
          {/* setProductTotal(productTotal && productTotal - 1) */}
          <Button onClick={() => handleSetCart(-1)} theme="icon">
            -
          </Button>
          <div className={cartOrderCount}>{product.count}</div>
          {/* setProductTotal(productTotal + 1) */}
          <Button onClick={() => handleSetCart(1)} theme="icon">
            +
          </Button>
        </div>
      </div>
      <div className={cartOrderTrash}>
        <Button onClick={() => handleSetCart(0)} theme="iconTrash">
          <i className="ri-delete-bin-line"></i>
        </Button>
        <strong>${product.price}</strong>
      </div>
    </div>
  );
};

export default Order;
