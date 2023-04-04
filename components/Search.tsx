import { searchWrapper, searchInput } from "./search.css";
import "remixicon/fonts/remixicon.css";

interface Props {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: Props) => {
  return (
    <div className={searchWrapper}>
      <i className="ri-search-line"></i>
      <input
        onChange={(event) => {
          onSearch(event.target.value);
        }}
        className={searchInput}
        type="text"
        autoFocus
        placeholder="Search product..."
      />
    </div>
  );
};

export default Search;
