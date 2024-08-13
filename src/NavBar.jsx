import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Vivero</Navbar.Brand>
      <Nav className="ml-auto">
        <LinkContainer to="/plants">
          <Nav.Link>Plantas</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/add">
          <Nav.Link>Agregar Planta</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/graphs">
          <Nav.Link>Gráficas</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
