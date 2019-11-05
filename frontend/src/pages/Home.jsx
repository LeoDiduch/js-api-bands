import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Mes users</h1>
        <ul>
          <li>
            <h3>Loic</h3>
            <p>
              <Link to="/user/1">Lien</Link>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
