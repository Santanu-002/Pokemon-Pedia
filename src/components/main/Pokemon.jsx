import styles from "./Pokemon.module.css";
import { Logo } from "../logo/Logo";
import { SearchBox } from "../searchBox/SearchBox";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useEffect, useState } from "react";

export const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const response = await fetch(currPokemon.url);
        const results = await response.json();
        return results;
      });

      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const searchData = pokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchSubmit = (searchInput) => {
    setSearch(searchInput);
  };

  return isError ? (
    <h1>
      oops!!! <br /> an unexpected error occured
    </h1>
  ) : (
    <div>
      <div className={styles.nav}>
        <Logo />
        <SearchBox searchSubmit={searchSubmit} searchQyery={search} />
      </div>

      <main className={styles.main}>
        {isLoading ? (
          <h1 className={styles.loading}>Loading.........</h1>
        ) : (
          searchData.map((currPokemon) => {
            return (
              <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
            );
          })
        )}
      </main>
    </div>
  );
};
