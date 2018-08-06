import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends React.Component {
  render() {
    return (
      <div className="kanto_card">
        <h1 className="title">Pokédex Kanto</h1>
        <PokemonList pokemonKanto={this.props.pokedex}/>
      </div>
    );
  }
}

export default App;