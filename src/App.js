import React from "react";
import CardList from "./components/cardList/cardList.components.jsx";

import SearchBox from "./components/searchBox/searchBox.components.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filterCats = this.state.cats.filter((cats) => {
      return cats.name
        .toLowerCase()
        .includes(this.state.searchField.toString().toLowerCase());
    });
    return (
      <div className="tc">
        <h1>CatsFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filterCats} />
      </div>
    );
  }
}

export default App;
