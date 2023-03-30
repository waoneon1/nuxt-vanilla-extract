import Link from "next/link";
import Image from "next/image";
import {
  productWrapper,
  productHeading,
  productsList,
  product,
} from "./products.css";
import "remixicon/fonts/remixicon.css";

const Product = () => {
  const products = [
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
    {
      brand: "Brand Name",
      name: "Short description about the product",
      price: 95,
    },
  ];

  return (
    <div className={productWrapper}>
      <div className={productHeading}>
        <span>28 Products</span>
        <Link href="">Show 10 Products</Link>
      </div>
      <div className={productsList}>
        {products.map((item, index) => (
          <Link className={product} href={`detail/${item.brand}`}>
            <Image
              src="/product.svg"
              alt="Picture of the author"
              width={170}
              height={280}
            />
            <div className="brand">{item.brand}</div>
            <div className="name">{item.name}</div>
            <div className="price">${item.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
