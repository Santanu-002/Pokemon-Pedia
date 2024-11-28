import logo from "../../assets/PokemonPedia.png";
import styles from "./Logo.module.css";

export const Logo = () => {
    return (
      <a href="/" title="PokémonPedia" className={styles.logo}>
        <img src={logo} alt="PokémonPedia" height={48} />
      </a>
    );
};