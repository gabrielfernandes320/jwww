import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { itemsListRoutePath, worldsListRoutePath } from "../../routes/config";
import { StyledNavbar } from "./styles";

const NavbarHeader: React.FC = () => {
  return (
    <>
      <StyledNavbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">GYNT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={worldsListRoutePath} href="#worlds">
              Mundos
            </Nav.Link>
            <Nav.Link as={Link} to={itemsListRoutePath} href="#worlds">
              Itens
            </Nav.Link>
            {/* <Nav.Link href="#characters">Personagens</Nav.Link>
            <Nav.Link href="#items">Itens</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  );
};

export default NavbarHeader;
