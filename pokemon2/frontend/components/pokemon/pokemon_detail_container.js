import { connect } from "react-redux";
import { requestSinglePokemon } from "./../../actions/pokemon_actions";
import { selectAllPokemon } from "./../../reducers/selectors";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectAllPokemon(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
