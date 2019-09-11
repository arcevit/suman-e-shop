import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" variant="light">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png"
            alt=""
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand>
            <Link className="text-white" to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link className="text-white" to="/products">
              Products
            </Link>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Link to="/cart">
          <button
            type="button"
            className="btn btn-labeled  btn-warning bg-transparent"
          >
            <span className="btn-label">
              {' '}
              <i className="fas fa-cart-plus " />{' '}
            </span>
            My Cart
          </button>
        </Link>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
}
