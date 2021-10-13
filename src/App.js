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

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
