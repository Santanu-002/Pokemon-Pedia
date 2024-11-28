import styles from "./PokemonCard.module.css";
import shape from "/blob.svg";
export const PokemonCard = ({ pokemonData }) => {
  return (
    <div className={styles.card}>
      <img className={styles.shape} src={shape} alt="shape" />
      <img
        className={styles.pokemon_img}
        src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}
      />
      <h1 className={styles.pokemon_name}>{pokemonData.name}</h1>
      <p className={styles.pokemon_type}>
        {pokemonData.types.map((types) => types.type.name).join(", ")}
      </p>
      <div className={styles.stats}>
        <p className={styles.stats_heading}>
          Height
          <span className={styles.stats_value}>{pokemonData.height}</span>
        </p>
        <p className={styles.stats_heading}>
          Weight
          <span className={styles.stats_value}>{pokemonData.weight}</span>
        </p>
        <p className={styles.stats_heading}>
          Speed
          <span className={styles.stats_value}>
            {pokemonData.stats[5].base_stat}
          </span>
        </p>
        <p className={styles.stats_heading}>
          Experience
          <span className={styles.stats_value}>
            {pokemonData.base_experience}
          </span>
        </p>
        <p className={styles.stats_heading}>
          Attack
          <span className={styles.stats_value}>
            {pokemonData.stats[1].base_stat}
          </span>
        </p>
        <p className={styles.stats_heading}>
          Abilities
          <span className={styles.stats_value}>
                      {pokemonData.abilities.map((currData) => currData.ability.name).slice(0, 1
            )}
          </span>
        </p>
      </div>
    </div>
  );
};
