import Link from "next/link";
import { ReactNode, useState } from "react";
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

interface Props {
  onDelete: (id: Number) => void;
  id: Number;
}

const Order = ({ id, onDelete }: Props) => {
  const [productTotal, setProductTotal] = useState(1);
  return (
    <div className={cartOrder}>
      <Image
        src="/cart.svg"
        alt="Picture of the author"
        width={85}
        height={130}
      />
      <div className={cartOrderItem}>
        <h4>Product Name</h4>
        <span>Description, color, size</span>
        <p>Shipping: 2-4 weeks</p>
        <div className={cartOrderInc}>
          <Button
            onClick={() => setProductTotal(productTotal && productTotal - 1)}
            theme="icon"
          >
            -
          </Button>
          <div className={cartOrderCount}>{productTotal}</div>
          <Button
            onClick={() => setProductTotal(productTotal + 1)}
            theme="icon"
          >
            +
          </Button>
        </div>
      </div>
      <div className={cartOrderTrash}>
        <Button onClick={() => onDelete(id)} theme="iconTrash">
          <i className="ri-delete-bin-line"></i>
        </Button>
        <strong>$70</strong>
      </div>
    </div>
  );
};

export default Order;
