import React from "react";
import { Link, Route } from "react-router-dom";
import "./Navigation.scss";

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/posts"}>Posts</Link>
        </li>
        <li>
          <Link to={"/photos"}>Photos</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
      </nav>
      <Route {...props} />
    </header>
  );
};

export default Navigation;
