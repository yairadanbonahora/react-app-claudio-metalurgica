import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

const NavbarMine = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="titulo-navbar" href="#home">Metalúrgica Claudio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Máquinas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Elementos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    )  
}
export default NavbarMine; 