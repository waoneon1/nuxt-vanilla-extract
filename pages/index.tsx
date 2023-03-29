import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>voila.id | Luxury Fashion Branded</title>
      </Head>
      <Link href={"/detail/bag"}>Detail Bag</Link>
    </div>
  );
}
