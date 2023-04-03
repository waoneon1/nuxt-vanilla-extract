import { ReactNode } from "react";
import Navbar from "./Navbar";
import Info from "./info/Info";
import { container } from "../styles/index.css";
import { useRouter } from "next/router";
import Link from "next/link";

import { backToShopWrapper, backToShop } from "../styles/cart.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  router.pathname === "/cart";
  return (
    <>
      <Info />
      <Navbar />
      {router.pathname === "/cart" ? (
        <div>
          <div className={backToShopWrapper}>
            <Link href={"/"} className={backToShop}>
              <i className="ri-arrow-left-line"></i>
              <span>Back To Shop</span>
            </Link>
          </div>
          <div className={container}>{children}</div>
        </div>
      ) : (
        <div className={container}>{children}</div>
      )}
    </>
  );
};

export default Layout;
