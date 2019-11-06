import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/highscores").then(({ data }) => {
      this.setState({ scores: data });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Scores</h1>
        <ul>
          {this.state.scores
            .sort((sc1, sc2) => {
              return sc1.score < sc2.score;
            })
            .filter((sc, i) => {
              return i < 3;
            })
            .map(sc => {
              return (
                <li>
                  {sc.playerName}: {sc.score}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
