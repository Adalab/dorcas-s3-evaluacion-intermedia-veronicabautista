import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Search from './components/Search';

// <--Futura prueba con API-->
// const apiList = "https://pokeapi.co/api/v2/pokemon/?limit=151";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poke: [],
      name: "",
    }

   this.searchPokemon = this.searchPokemon.bind(this);
  }

  // componentDidMount () {
  //   this.fetchCharacterList()
  // }


  // fetchCharacterList (){
  //   fetch (apiList)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     this.setState({
  //       poke: data
  //     });
  //   });

  // }

  searchPokemon(event) {
    const myPoke = event.currentTarget.value;

    this.setState({
      name: myPoke
    });
  }

  render() {
    return (
      <div className="kanto_card">
        <h1 className="title">Pokédex Kanto</h1>
        <Search
            pokeSearch={this.searchPokemon} />
        <PokemonList pokemonKanto={this.props.pokedex} pokeName={this.state.name}/>
      </div>
    );
  }
}

export default App;