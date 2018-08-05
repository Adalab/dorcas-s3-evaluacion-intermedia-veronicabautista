import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="kanto_card">
        <h1 className="title">Pokédex Kanto</h1>
        <ul className="pokemonlist">
          {this.props.pokeKanto.map(item => {
            return (
              <li className="pokemonlist__item">
                <h3 className="pokemon__name">{item.name}</h3>
                <img className="pokemon__image" src={item.url} alt={item.name} />
                <ul className="pokemon__attack--type">{item.types.map(attack => {
                  return <li className="pokemon__attack">{attack}</li>
                })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;