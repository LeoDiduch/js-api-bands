import React from "react";
import axios from "axios";
import FavThumbnail from "../components/FavThumbnail";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      favoritesId: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/users/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          name: data.name
        });
      });
    axios
      .get(
        `http://localhost:5000/users/${this.props.match.params.id}/favorites`
      )
      .then(({ data }) => {
        const favIds = data.map(fav => {
          return fav.id;
        });
        this.setState({
          favoritesId: favIds
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Favoris de {this.state.name}</h1>
        <ul>
          {this.state.favoritesId.map(favId => {
            return <FavThumbnail key={favId} id={favId} />;
          })}
        </ul>
      </div>
    );
  }
}
