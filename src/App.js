import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    movie: [
      {
        id: 0,
        title: "Avengers: Infinity Wars",
        image: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        overview:
          "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy…"
      },
      {
        id: 1,
        title: "Lord of the Rings",
        image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/eDkDYEUIHEp5qavNa5k6XsMHgbf.jpg',
        overview:
          "A group of 9 companions march through middle earth to destroy the one ring."
      }
    ]
  };

  renderMovieGrid() {
    return this.state.movie.map((movie, key) => {
      return (
        <div className='movie-container' key={key}>
          <div className='img-container'>
            <img className="movie-photo" src={movie.image} width='50' alt="react" />
          </div>
          <div className="movie-description-container">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      );
    });
  }

  render() {
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
        <input className="input-bar" placeholder="Enter Search Term" />
        {this.renderMovieGrid()}
      </div>
    );
  }
}

export default App;
