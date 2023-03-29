import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
