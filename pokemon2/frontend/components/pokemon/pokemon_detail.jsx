import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  render() {
    debugger;
    const id = parseInt(this.props.match.params.id) - 1;
    const poke = this.props.pokemon[id];

    return (
      <ul>
        <li>
          <img src={poke.imageUrl}></img>
        </li>
        <li>Pokemon: {poke.name}</li>
        <li>Type: {poke.type}</li>
        <li>Attack: {poke.attack}</li>
        <li>Defense: {poke.defense}</li>
      </ul>
    );
  }
}

export default PokemonDetail;
