import React, { Component } from "react";

class Pokemon extends Component {
  render () {
		const newPokemon = this.props.pokemon;
    return (
      <div className="pokemon__card">
				<div className="pokemon__image">
					<img className="pokemon__image" src={newPokemon.url} alt={newPokemon.name} />
				</div>
				<h3 className="pokemon__name">{newPokemon.name}</h3>
        <ul className="pokemon__attack--type">{newPokemon.types.map(attack => {
          return <li className="pokemon__attack">{attack}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Pokemon;
