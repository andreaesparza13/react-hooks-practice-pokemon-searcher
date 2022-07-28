import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  // FETCH REQUEST
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then((pokemonArray) => setPokemons(pokemonArray))
  }, [])

  // FILTER WITH SEARCH INPUT
  const [seachQuery, setSeachQuery] = useState("");
  const pokemonToDisplay = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(seachQuery.toLowerCase());
  })
  function handleChange(e) {
    setSeachQuery(searchQuery => searchQuery = e.target.value);
  }

  // FORM HANDLER
  function onAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon}/>
      <br />
      <Search onChange={handleChange}/>
      <br />
      <PokemonCollection pokemons={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
