import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
      <input type="text" placeholder="Enter the name" value={this.props.campo} onChange= {this.props.pokeSearch}/>
    </div>
    );
  }
}

export default Filter;