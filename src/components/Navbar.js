import logo from './imgs/logo.png';
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import CartWidget from './Cart';

const NavbarMine = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand href="#home">Metalúrgica Claudio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Máquinas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Elementos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div>
            <CartWidget/>
          </div>
        </Container>
      </Navbar> 
    )  
}
export default NavbarMine; 