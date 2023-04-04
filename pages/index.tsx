import Head from "next/head";
import Product from "../components/Products";
import Search from "../components/Search";
import Button from "../components/Button";
import { spaceBottom } from "../styles/index.css";
import { useState, useEffect } from "react";
import { default as Axios } from "axios";
import Link from "next/link";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Head>
        <title>voila.id | Luxury Fashion Branded</title>
      </Head>
      <Search onSearch={(val) => setSearchValue(val)} />
      <Product filter={searchValue} />
      <div className={spaceBottom}></div>
    </>
  );
}
