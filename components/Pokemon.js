import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class Pokemon extends Component {
    render () {
    return (
        <div className="item">
        <img className="pokemon__image" src={ this.props.url }/>
        <div>
          <h5>{ this.props.name }</h5>
          <h6 className="pokemon_name">{ this.props.name }</h6>
        </div>
        <div className="pokemon_type">{ this.props.type }</div>
      </div>
    );
  }
}

export default Pokemon;