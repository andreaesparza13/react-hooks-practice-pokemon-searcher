import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {

  // MAPPING POKEMON - map over array of "pokemons" and create individual pokemon cards
  const pokemonList = pokemons.map(pokemon => {
    return (
      <PokemonCard 
        key={pokemon.id} 
        name={pokemon.name}
        hp={pokemon.hp} 
        spriteFront={pokemon.sprites.front}
        spriteBack={pokemon.sprites.back}
      />
    );
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}         {/* <------- invoking our pokemon "map" */}
    </Card.Group>
  );
}

export default PokemonCollection;
