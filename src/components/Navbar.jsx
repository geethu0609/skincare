import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

const Navbar = () => {
  return (
    <BsNavbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <BsNavbar.Brand href="/" className="fw-bold text-danger">
          XYRA
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/cart">🛒Cart</Link>
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/orders">Orders</Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
