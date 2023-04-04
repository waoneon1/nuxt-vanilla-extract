import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import {
  prodDetailWrapper,
  prodDetailHeading,
  prodDetailBody,
} from "../../styles/detailProduct.css";
import {
  cartWrapper,
  cartRight,
  cartLeft,
  cartName,
  cartPrice,
} from "../../styles/detailCart.css";
import Button from "../../components/Button";
import "remixicon/fonts/remixicon.css";
import { default as Axios } from "axios";
import { useState, useEffect, useContext } from "react";
import { CartContext, Product } from "../../components/Layout";
var _ = require("lodash");

const Detail = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const [product, setProduct] = useState({
    id: 1,
    title: "loading...",
    price: 1,
    category: "loading...",
    description: "loading...",
    image: "loading...",
  });

  useEffect(() => {
    if (!router.isReady) return;
    const { product } = router.query;
    Axios.get(`https://fakestoreapi.com/products/${product}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    // when cart updated
  }, [cart]);

  const handleSetCart = (pro) => {
    if (!_.find(cart, ["id", pro.id])) {
      pro.count = 1;
      setCart([...cart, pro]);
    }
  };

  return (
    <>
      <Head>
        <title>voila.id | Keranjang Belanja</title>
      </Head>
      <div className={cartWrapper}>
        <div className={cartLeft}>
          <div
            style={{
              backgroundImage: `url('${product.image}')`,
              width: 701,
              height: 483,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className={cartRight}>
          <div className={cartName}>{product.title}</div>
          <div className={cartPrice}>${product.price}</div>
          {_.find(cart, ["id", product.id]) ? (
            <Button onClick={() => ""} theme="full">
              <i className="ri-check-double-line"></i>
              <span>ADDED</span>
            </Button>
          ) : (
            <Button onClick={() => handleSetCart(product)} theme="full">
              <i className="ri-shopping-cart-line"></i>
              <span>ADD TO CHART</span>
            </Button>
          )}
        </div>
      </div>
      <div className={prodDetailWrapper}>
        <div className={prodDetailHeading}>Product Detail</div>
        <ul className={prodDetailBody}>
          <li>
            <strong>ID:</strong> <small>SKU-{product.id}</small>
          </li>
          <li>
            <strong>Description:</strong> <small>{product.description}</small>
          </li>
          <li>
            <strong>Category:</strong> <small>{product.category}</small>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Detail;
