import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../Style/navbar.css';  

var NavBar = () => {
    return(
        <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/" style ={{padding:'0px 1000px 0px 0px'}}>Made With Love</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="/login">Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar;