import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        console.log(data);
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
            return (
              <li>
                <h3>{user.name}</h3>
                <p>
                  <Link to={`/user/${user.id}`}>Lien</Link>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
