import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { vars } from "../vars.css";

import {
  backToShopWrapper,
  backToShop,
  cartHeading,
  cartOrderWrapper,
  cartOrders,
  cartOrder,
  cartOrderItem,
  cartOrderCount,
  cartOrderInc,
  cartOrderTrash,
  cartSummaryWrapper,
  cartSummaryItem,
  cartSummaryTotal,
  cart,
  cartSummary,
  cartSummarys,
} from "../styles/cart.css";
import Button from "../components/Button";
import { useState } from "react";

export default function Cart() {
  const [productTotal, setproductTotal] = useState(1);
  return (
    <>
      <div className="">
        <Head>
          <title>voila.id | Keranjang Belanja</title>
        </Head>
      </div>
      <div className={backToShopWrapper}>
        <Link href={"/"} className={backToShop}>
          <i className="ri-arrow-left-line"></i>
          <span>Back To Shop</span>
        </Link>
      </div>
      <div className={cartHeading}>
        <h1>Shopping Cart</h1>
        <p>Shopping charges and discount codes are confirmed at checkout</p>
      </div>
      <div className={cart}>
        <div className={cartOrderWrapper}>
          <h3>Your Order</h3>
          <div className={cartOrders}>
            {[1, 2, 3].map((item) => (
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
                      onClick={() =>
                        setproductTotal(productTotal && productTotal - 1)
                      }
                      theme="icon"
                    >
                      -
                    </Button>
                    <div className={cartOrderCount}>{productTotal}</div>
                    <Button
                      onClick={() => setproductTotal(productTotal + 1)}
                      theme="icon"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className={cartOrderTrash}>
                  <Button
                    onClick={() => console.log("danger")}
                    theme="iconTrash"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </Button>
                  <strong>$70</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cartSummaryWrapper}>
          <h3>Summary</h3>
          <div className={cartSummary}>
            <div className={cartSummarys}>
              <div className={cartSummaryItem}>
                <div>Items in the Cart</div>
                <div>$149.00</div>
              </div>
            </div>
            <div className={cartSummarys}>
              <h4>Total</h4>
              <h4>$123.00</h4>
            </div>
            <Button onClick={() => console.log("danger")} theme="full">
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
