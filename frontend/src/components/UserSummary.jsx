import React from "react";
import { Link } from "react-router-dom";

export default function UserSummary({ name, id }) {
  return (
    <li>
      <Link to={`/user/${id}`}>
        <h3>{name}</h3>
      </Link>
    </li>
  );
}
