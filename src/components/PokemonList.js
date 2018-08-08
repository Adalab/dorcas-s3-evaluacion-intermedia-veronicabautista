import React from "react";
import PokeCard from "./PokemonCard";

class PokemonList extends React.Component {
  render () {
    return (
			<ul className="pokemonlist">
          {this.props.pokemonKanto
          .filter(searching => {
            return searching.name.toLocaleLowerCase().includes(this.props.pokeName.toLocaleLowerCase());
            })
          .map(card => {
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

// class CharacterList extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<ul>
// 					{this.props.character
// 						.filter(person => {
// 							return person.name.toLocaleLowerCase().includes(this.props.personName.toLocaleLowerCase());
// 						})
// 						.map(item => {
// 							return (
// 								<li className="character__card">
// 									<img className="character__picture" src={item.image} alt={item.name} />
// 									<h2 className="character_name">{item.name}</h2>
// 									<h3 className="character__house">{item.house}</h3>
// 								</li>
// 							);
// 						})}
//         </ul>
// 			</div>
// 		)
// 	}
// }

// export default CharacterList;