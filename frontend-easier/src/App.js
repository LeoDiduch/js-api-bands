import React from "react";
import "./App.css";
import axios from "axios";
import Band from "./components/Band";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/groups").then(({ data }) => {
      this.setState({
        bands: data
      });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.bands.map(band => {
          return <Band key={band.id} name={band.name} />;
        })}
      </div>
    );
  }
}

export default App;
