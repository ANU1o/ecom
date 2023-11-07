import React from "react";
import { useState } from "react";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  Collapse,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchProduct } from "../../redux/productSlice";

const Header = () => {
  const cartArray = useSelector((state) => state.cart);
  var cartCount = cartArray.length;
  const dispatch = useDispatch();

  const wishlistArray = useSelector((state) => state.wishlist);
  var wishlistCount = wishlistArray.length;

  const [open, setOpen] = useState(false);

  return (
    <div className="sticky-top">
      <Navbar expand="lg" className=" bg-secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="text-primary fw-normal">
            <span className="text-light fw-bold">
              <i className="fa-solid fa-store"></i>E
            </span>
            COM
          </Navbar.Brand>

          <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
              >
                <i className="fa-solid fa-home me-1"></i>Home
              </NavLink>
              <NavLink
                to="/404"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
              >
                <i className="fa-solid fa-circle-xmark me-1"></i>404
              </NavLink>
            </Nav>

            <Nav className="ms-auto">
              <NavLink
                to="/Wishlist"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
              >
                <i className="fa-solid fa-heart me-1"></i>
                <span className="d-inline d-lg-none me-2">Wishlist</span>
                <Badge bg="primary" className="align-top">
                  {wishlistCount}
                </Badge>
              </NavLink>
              <NavLink
                to="/Cart"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
              >
                <i className="fa-solid fa-shopping-cart me-1"></i>
                <span className="d-inline d-lg-none me-2">Cart</span>
                <Badge bg="primary" className="align-top">
                  {cartCount}
                </Badge>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Button
            variant="secondary"
            className="ms-3 rounded-0"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </Container>
      </Navbar>
      <Collapse in={open}>
        <div>
          <Navbar expand="lg" className=" bg-secondary">
            <Container>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                className="rounded-0"
                onChange={(e) => dispatch(searchProduct(e.target.value))}
              />
            </Container>
          </Navbar>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
