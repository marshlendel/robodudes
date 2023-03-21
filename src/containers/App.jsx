import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbar from "../components/Searchbar";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchQuery: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({ robots: data });
  }

  onSearchChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Robot Dudes</h1>
        <Searchbar
          onSearch={this.onSearchChange}
          value={this.state.searchQuery}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
