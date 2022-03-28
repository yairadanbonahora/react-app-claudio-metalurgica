import logo from './imgs/logo.png';
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import CartWidget from './Cart';
import { Link } from 'react-router-dom';

const NavbarMine = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Link to='/'> <img src={logo} className="App-logo" alt="logo"/></Link>
          <Navbar.Brand as={Link} to='/'>Metalúrgica Claudio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
              <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
              <NavDropdown title="Elementos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/category/maquinas'>Máquinas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/category/productos'>Productos</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
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