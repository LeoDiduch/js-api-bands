import React from "react";
import axios from "axios";

export default class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      axios.get("http://localhost:5000/highscores").then(({ data }) => {
        this.setState({ scores: data });
      });
    }, 5000);
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
