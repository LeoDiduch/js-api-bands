import React from "react";
import "./App.css";
import HighScores from "./components/HighScores";
import ScoreForm from "./components/ScoreForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <HighScores />
        <ScoreForm />
      </div>
    );
  }
}

export default App;
