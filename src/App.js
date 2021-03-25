import React, { Component, Fragment } from "react";
import SearchComponent from "./Component/SearchComponent";
import axios from "axios";
import DisplayGitUsers from "./Component/DisplayGitUsers";
class App extends Component {
  state = {
    term: "",
    reposData: "",
    loading: false,
  };
  onTermSubmit = async term => {
    let client_id = "Iv1.5e6f47469eedc03d";
    let client_secret = "91e21f39f27a6c44d8647717ca200b8c11355db2";
    let response = await axios.get(
      `https:api.github.com/users/${term}?Client_Id${client_id}&Client_Secret${client_secret}`
    );

    let repos = await axios.get(
      `https://api.github.com/users/${term}/repos?Client_Id${client_id}&Client_Secret${client_secret}`
    );

    this.setState({ term: response.data, reposData: repos, loading: true });
  };
  render() {
    return (
      <Fragment>
        <SearchComponent onTermSubmit={this.onTermSubmit} />
        <section className="container my-2">
          <hr className="hr" />
          <DisplayGitUsers
            users={this.state.term}
            repos={this.state.reposData}
            loading={this.state.loading}
          />
        </section>
      </Fragment>
    );
  }
}

export default App;
