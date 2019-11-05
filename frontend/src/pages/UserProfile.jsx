import React from "react";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>Les favoris de mon user #{this.props.match.params.id}</p>;
  }
}
