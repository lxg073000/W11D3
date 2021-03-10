export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, pokeId) => {
  return Object.values(state.entities.pokemon).filter(
    (pokemon) => pokemon.id === pokeId
  );

  // return Object.values(state.entities.pokemon.pokeId)
};
