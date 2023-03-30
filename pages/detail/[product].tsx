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

const Detail = () => {
  const router = useRouter();
  const { product } = router.query;
  return (
    <>
      <Head>
        <title>voila.id | Keranjang Belanja</title>
      </Head>
      <div className={cartWrapper}>
        <div className={cartLeft}>
          <Image
            src="/detail-img.svg"
            alt="Picture of the author"
            width={701}
            height={483}
          />
        </div>
        <div className={cartRight}>
          <div className={cartName}>{product}</div>
          <div className={cartPrice}>$95</div>
          <Button onClick={() => console.log("click")} theme="full">
            <i className="ri-shopping-cart-line"></i>
            <span>ADD TO CHART</span>
          </Button>
        </div>
      </div>
      <div className={prodDetailWrapper}>
        <div className={prodDetailHeading}>Product Detail</div>
        <ul className={prodDetailBody}>
          <li>Brand</li>
          <li>Description</li>
          <li>Size</li>
          <li>Etc</li>
        </ul>
      </div>
    </>
  );
};

export default Detail;
