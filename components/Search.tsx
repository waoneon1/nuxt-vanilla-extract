import Link from "next/link";
import Image from "next/image";
import { searchWrapper, searchInput } from "./search.css";
import "remixicon/fonts/remixicon.css";

const Search = () => {
  return (
    <div className={searchWrapper}>
      <i className="ri-search-line"></i>
      <input
        className={searchInput}
        type="text"
        autoFocus
        placeholder="Search product..."
      />
    </div>
  );
};

export default Search;
