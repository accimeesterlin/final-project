import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">CryptoBase</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            {/* TODO Change to Link for React Routing */}
            {/* <a className="nav-link" href="#">Home </a> */}
          </li>
        </ul>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Nav;
