import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (
    <li className="pokeIndex">
      {props.pokemon.id}{" "}
      <Link to={`/pokemon/${props.pokemon.id}`}>
        <img className="thumbnail" src={props.pokemon.imageUrl}></img>
        Pokemon: {props.pokemon.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
