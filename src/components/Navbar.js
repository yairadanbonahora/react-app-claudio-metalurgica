import logo from './imgs/logo.png';
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartWidget from './Cart';

const NavbarMine = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to='/'> 
            <img src={logo} className="App-logo" alt="logo"/>
            <Navbar.Brand>Metalúrgica Claudio</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/nosotros'><Nav.Link>Nosotros</Nav.Link></LinkContainer>
              <NavDropdown title="Elementos" id="basic-nav-dropdown">
                <LinkContainer to='/category/maquinas'>
                <NavDropdown.Item>Máquinas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/productos'>
                <NavDropdown.Item>Productos</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/contacto'>
                <Nav.Link>Contacto</Nav.Link>
              </LinkContainer>
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