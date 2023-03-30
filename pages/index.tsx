import Head from "next/head";
import Product from "../components/Products";
import Search from "../components/Search";
import Button from "../components/Button";
import { spaceBottom } from "../styles/index.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>voila.id | Luxury Fashion Branded</title>
      </Head>
      <Search />
      <Product />
      <Button onClick={() => console.log("danger")} theme="wide">
        SHOW MORE
      </Button>
      <div className={spaceBottom}></div>
    </>
  );
}
