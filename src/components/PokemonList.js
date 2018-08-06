import React from "react";
import PokeCard from "./PokemonCard";

class PokemonList extends React.Component {
  render () {
    return (
			<ul className="pokemonlist">
          {this.props.pokemonKanto.map(card => {
            return (
              <li className="pokemonlist__card" key={card.id}>
                <PokeCard pokemon={card} />
              </li>
            );
          })}
        </ul>
    )
  }
};

export default PokemonList;