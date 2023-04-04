import Link from "next/link";
import Image from "next/image";
import {
  productWrapper,
  productHeading,
  productsList,
  product,
} from "./products.css";
import "remixicon/fonts/remixicon.css";
import { default as Axios } from "axios";
import { useState, useEffect } from "react";
import { chunk } from "lodash";
import { useRouter } from "next/router";
import { btnWrapper, btn } from "./button.css";
interface Props {
  filter: String;
}
const Product = ({ filter }: Props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // API
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setOriginalProduct(res.data);
        setProducts(chunk(res.data, 10)[currentPage - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  // Filter Search
  useEffect(() => {
    const filteredProduct = originalProduct.filter((item) => {
      return item.title.toLowerCase().includes(filter);
    });
    setProducts(filteredProduct);
  }, [filter]);

  // Pagination
  useEffect(() => {
    let page = 1;
    if (router.query.page) {
      page = parseInt(router.query.page as string, 10);
    }
    setCurrentPage(page);
  });

  const handleShowPagination = () => {
    let pageStart = currentPage * 10 - 9;
    let pageEnd = currentPage * 10;

    return `Showing ${pageStart}-${pageEnd} of ${originalProduct.length}`;
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: 100,
          }}
        >
          <Image
            src={"/loading.gif"}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className={productWrapper}>
          <div className={productHeading}>
            <span>{products.length} Products</span>
            <span>{handleShowPagination()}</span>
          </div>
          <div className={productsList}>
            {products.map((item) => (
              <Link
                key={item.id}
                className={product}
                href={`detail/${item.id}`}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    marginBottom: 15,
                    padding: 10,
                  }}
                >
                  <div
                    className="brand"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      width: "100%",
                      height: 200,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="brand">{item.title}</div>
                <div className="name">{item.category}</div>
                <div className="price">${item.price}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {originalProduct.length !== currentPage * 10 ? (
        <div className={btnWrapper}>
          <Link className={btn["wide"]} href={`/?page=${currentPage + 1}`}>
            SHOW MORE
          </Link>
        </div>
      ) : (
        <div className={btnWrapper}>
          <Link className={btn["wide"]} href={`/?page=${currentPage - 1}`}>
            PREV
          </Link>
        </div>
      )}
    </>
  );
};

export default Product;
