import Link from "next/link";
import Image from "next/image";
import {
  navBar,
  navBarItems,
  wrapperNavbar,
  accountDropdown,
  cartCount,
} from "./navbar.css";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const Navbar = () => {
  const [accountVisible, setAccountVisibility] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div className={wrapperNavbar}>
      <Link href="/">
        <Image
          src="/voila-logo.png"
          alt="Picture of the author"
          width={100}
          height={40}
        />
      </Link>
      <div className={navBar}>
        <div
          className={navBarItems}
          onClick={() => setAccountVisibility(!accountVisible)}
        >
          {login ? (
            <i className="ri-user-line"></i>
          ) : (
            <i className="ri-login-box-line"></i>
          )}
          {accountVisible && (
            <div className={accountDropdown}>
              {login ? (
                <ul>
                  <li>name@email.com</li>
                  <li onClick={() => setLogin(false)}>Logout</li>
                </ul>
              ) : (
                <ul>
                  <li onClick={() => setLogin(true)}>Login</li>
                </ul>
              )}
            </div>
          )}
        </div>
        <Link className={navBarItems} href="/cart">
          <i className="ri-shopping-cart-line"></i>
          <span className={cartCount}>2</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
