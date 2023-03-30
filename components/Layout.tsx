import { ReactNode } from "react";
import Navbar from "./Navbar";
import Info from "./info/Info";
import { container } from "../styles/index.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Info />
      <Navbar />
      <div className={container}>{children}</div>
    </>
  );
};

export default Layout;
