import Head from "next/head";
import Link from "next/link";

import { vars } from "../vars.css";
import Order from "../components/Order";

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
  const [products, setProducts] = useState([1, 2, 3]);

  function handleDelete(id) {
    let newProduct = products.filter((item) => {
      return item !== id;
    });
    setProducts(newProduct);
  }
  // function handle(): number[] {
  //   let pro = products;
  //   pro.pop();
  //   console.log(pro, "pro");
  //   return pro;
  // }

  return (
    <>
      <div className="">
        <Head>
          <title>voila.id | Keranjang Belanja</title>
        </Head>
      </div>
      <div className={cartHeading}>
        <h1>Shopping Cart</h1>
        <p>Shopping charges and discount codes are confirmed at checkout</p>
      </div>
      <div className={cart}>
        <div className={cartOrderWrapper}>
          <h3>Your Order</h3>
          <div className={cartOrders}>
            {products.map((item) => (
              // <Order onDelete={() => setProducts(handle())} />
              <Order onDelete={handleDelete} id={item} />
            ))}
          </div>
        </div>
        <div className={cartSummaryWrapper}>
          <div>
            <Button onClick={() => console.log("danger")} theme="full">
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
