import styles from "./SearchBox.module.css";
import { BiSearch } from "react-icons/bi";

export const SearchBox = ({ searchSubmit, searchQyery }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        autoComplete="off"
        type="text"
        name="search"
        maxLength={20}
        placeholder="Search Pokémon..."
        value={searchQyery}
        onChange={(e) => searchSubmit(e.target.value)}
      />
      <BiSearch className={styles.search_icon} />
    </div>
  );
};
