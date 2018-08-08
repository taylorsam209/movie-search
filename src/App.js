import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieRow from "./components/MovieRow";
import axios from "axios";

class App extends Component {
  state = {
    movie: [],
    input: ""
  };

  performMovieSearch(movie) {
    console.log("performing search");
    const URL = "https://api.themoviedb.org/3/search/movie";
    const key = "api";
    axios.get(`${URL}${key}&query=${movie}`).then(response => {
      console.log(response.data);
      this.setState({ movie: response.data.results });
    });
  }

  handleSearch(input) {
    this.setState({ input: input.target.value });
    this.performMovieSearch(this.state.input);
  }

  render() {
    console.log(this.state.input);
    console.log(this.state.movie);
    return (
      <div className="App">
        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img width="50" src={logo} />
              </td>
              <td style={{ color: "white" }}>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>{process.env.REACT_APP_Movies_DB_Key}</h2>
        <input
          className="input-bar"
          value={this.state.input}
          placeholder="Enter Search Term"
          onChange={e => this.handleSearch(e)}
        />
        <MovieRow movies={this.state.movie} />
      </div>
    );
  }
}

export default App;
