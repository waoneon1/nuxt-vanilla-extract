import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Navbar from "./Navbar";
import Info from "./info/Info";
import { container } from "../styles/index.css";
import { useRouter } from "next/router";
import Link from "next/link";

import { backToShopWrapper, backToShop } from "../styles/cart.css";
interface Props {
  children: ReactNode;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  count: number;
}

export const CartContext = createContext(null);

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [cart, setCart] = useState<Product[] | []>([]);

  return (
    <>
      <Info />
      <CartContext.Provider value={{ cart, setCart }}>
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
      </CartContext.Provider>
    </>
  );
};

export default Layout;
