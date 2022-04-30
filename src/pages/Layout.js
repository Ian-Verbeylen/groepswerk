import React from "react";
import { Outlet, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

import "../css/Style.css";

/* notes: 
  - for the navbar, i copied section "Responsive behaviors" from:
    https://react-bootstrap.github.io/components/navbar/#color-schemes
  - username value needs to be linked to data file (later to database)
  - username and blue circle to be removed from menu in small screen version
    and to be moved to right of screen
      => i tried this by relocating "Navbar.Collapse", but then the username and circle text were in the same column
  - blue circle text should be a blue circle
  - I removed <bg="light" variant="dark"> from Navbar, to get a green background, but can't get the colors quite right atm, don't know a lot about Bootstrap. style is defined in Style.css
  - LinkContainer: to use react-router-dom with bootstrap, link to docs:
    https://www.npmjs.com/package/react-router-bootstrap
*/

const Layout = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/frigo">
                  <Nav.Link>Mijn frigo</Nav.Link>
                </LinkContainer>
                <LinkContainer to="winkellijst">
                  <Nav.Link>Mijn winkellijst</Nav.Link>
                </LinkContainer>
                <LinkContainer to="receptenboek">
                  <Nav.Link>Mijn receptenboek</Nav.Link>
                </LinkContainer>
                <LinkContainer to="profiel">
                  <Nav.Link>Mijn profiel</Nav.Link>
                </LinkContainer>
                <LinkContainer to="about">
                  <Nav.Link>About app</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <Navbar.Text>Hello, username</Navbar.Text>
                <LinkContainer to="profiel">
                  <Nav.Link>Blue circle</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
