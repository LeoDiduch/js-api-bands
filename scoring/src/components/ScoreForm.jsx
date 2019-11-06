import React from "react";
import axios from "axios";

export default class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      score: 0
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("http://localhost:5000/highscores", this.state)
      .then(({ data }) => {
        console.log("Déjà ?");
      });
  }
  render() {
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="playerName"
          value={this.state.playerName}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          type="number"
          name="score"
          value={this.state.score}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input type="submit" value="Send!" />
      </form>
    );
  }
}
