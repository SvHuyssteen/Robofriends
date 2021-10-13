import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import Searchbox from "./SearchBox";

const state = {
  robots: robots,
  searchfield: "",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
