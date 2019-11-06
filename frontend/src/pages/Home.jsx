import React from "react";
import axios from "axios";
import UserSummary from "../components/UserSummary";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then(({ data }) => {
        this.setState({
          users: data
        });
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <h1>Mes users</h1>
        <ul>
          {this.state.users.map(user => {
            return <UserSummary key={user.id} name={user.name} id={user.id} />;
          })}
        </ul>
      </div>
    );
  }
}
