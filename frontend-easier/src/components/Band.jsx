import React from "react";
import YouTube from "react-youtube";
import axios from "axios";

export default class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidId: "dQw4w9WgXcQ"
    };
  }
  componentDidMount() {
    /*
      ***CAUTION!*** 
      This is a bit of more advanced code, and has nothing to do with 
      the topic of this LC.
      You can read this, but it's not mandatory to understand all of it
      I let it here 'cause it's a nice bit of code when you want to use 
      Google/Youtube's API
      */
    const apiKey = "AIzaSyAYQjF7_hRZGUMoUwlcUezlq33cGFz5SO0";
    const query = `${this.props.name} music`;

    axios
      .get(
        `https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=1&type=video&key=${apiKey}`
      )
      .then(({ data }) => {
        const vidId = data.items[0].id.videoId;
        this.setState({ vidId: vidId });
      })
      .catch(error => {
        console.log("Echec appel API Youtube: " + error);
      });
  }
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <YouTube videoId={this.state.vidId} />
      </li>
    );
  }
}
