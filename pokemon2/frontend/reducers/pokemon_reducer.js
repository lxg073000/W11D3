import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON,
} from "./../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_SINGLE_POKEMON:
      const currentPokemon = { [action.pokemon.id]: action.pokemon };
      return Object.assign({}, state, currentPokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
