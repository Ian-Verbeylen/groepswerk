import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/frigo">Mijn frigo</Link>
            </li>
            <li>
              <Link to="/winkellijst">Mijn winkellijst</Link>
            </li>
            <li>
              <Link to="/receptenboek">Mijn receptenboek</Link>
            </li>
            <li>
              <Link to="/profiel">Mijn profiel</Link>
            </li>
            <li>
              <Link to="/app">About app</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
