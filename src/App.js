import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state= {
    movie: 'Star Wars',
    rows: <p>This is my row</p>
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
        <input className='input-bar' placeholder="Enter Search Term" />
        {this.state.movie}
      </div>
    );
  }
}

export default App;
