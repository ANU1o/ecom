import React from "react";
import { Col, NavLink, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-secondary p-5" data-bs-theme="dark">
      <Row className="align-items-center justify-content-center">
        <Col
          lg
          xs="12"
          className="mb-3 align-self-center text-start d-block d-lg-none text-lg-center"
        >
          <Navbar.Brand className="text-primary ">
            <span className="text-light fw-bold">
              <i className="fa-solid fa-store"></i>E
            </span>
            COM
          </Navbar.Brand>
          <p className="text-muted">
            Made by{" "}
            <Link
              to="https://anu1o.netlify.app"
              target="_blank"
              className="anufont"
            >
              ANU1o
            </Link>
          </p>
        </Col>
        <Col lg xs="12" className="mb-3">
          <div>
            <h5 className="text-primary">Pages</h5>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Wishlist">Wishlist</NavLink>
            <NavLink href="/Cart">Cart</NavLink>
          </div>
        </Col>
        <Col
          lg
          xs="12"
          className="mb-3 align-self-center text-start text-lg-center d-none d-lg-block"
        >
          <Navbar.Brand className="text-primary ">
            <span className="text-light fw-bold">
              <i className="fa-solid fa-store"></i>E
            </span>
            COM
          </Navbar.Brand>
          <p className="text-muted">
            Made by{" "}
            <Link
              to="https://anu1o.netlify.app"
              target="_blank"
              className="anufont"
            >
              ANU1o
            </Link>
          </p>
        </Col>
        <Col lg xs="12" className="mb-3 text-start text-lg-end">
          <div>
            <h5 className="text-primary">Libraries</h5>
            <NavLink target="_blank" href="https://reactrouter.com/en/main">
              react-router-dom
            </NavLink>
            <NavLink target="_blank" href="https://react-bootstrap.netlify.app">
              react-bootstrap
            </NavLink>
            <NavLink target="_blank" href="https://react-redux.js.org">
              react-redux
            </NavLink>
            <NavLink target="_blank" href="https://redux-toolkit.js.org">
              @reduxjs/toolkit
            </NavLink>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
