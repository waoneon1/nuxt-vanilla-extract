import Head from "next/head";
import Order from "../components/Order";

import {
  backToShopWrapper,
  backToShop,
  cartHeading,
  cartOrderWrapper,
  cartOrders,
  cartSummaryWrapper,
  cartSummaryItem,
  cartSummaryTotal,
  cartSummary,
  cartSummarys,
} from "../styles/cart.css";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { CartContext } from "../components/Layout";
import OrderEmpty from "../components/OrderEmpty";
import Summary from "../components/Summary";

export default function Cart() {
  const { cart } = useContext(CartContext);

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
      <div style={{ display: "flex", marginBottom: 100 }}>
        <div className={cartOrderWrapper}>
          <h3>Your Order</h3>
          <div className={cartOrders}>
            {cart.length > 0 ? (
              cart.map((item) => <Order product={item} />)
            ) : (
              <OrderEmpty />
            )}
          </div>
        </div>
        <Summary />
      </div>
    </>
  );
}
