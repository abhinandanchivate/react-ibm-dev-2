import React from "react";
import { Link } from "react-router-dom";
import Test from "./Test";

const Header = ({ user: { name }, logOut, appName = "DevConnector" }) => {
  // props : share the properties i.e. fields / value object
  // and we can share the functions as well.

  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-code"></i> {appName} {name}
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <button className="btn btn-primary" onClick={logOut} />
        </ul>
      </nav>
      <Test />
    </>
  );
};

export default Header;
/**
 * import : to import the React library to use JSX syntax and create React components.
 * const : to declare a constant variable named Header, which is a functional component.
 * () => { ... } : to define the component as an arrow function that returns JSX.
 * return <div>Header</div>; : to specify the JSX that the component will render, which is a simple div element containing the text "Header".
 */
