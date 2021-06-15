import React from "react";
import { Container } from "react-bootstrap";
import NavbarHeader from "../Navbar";

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Container fluid>
      <NavbarHeader />
      {children}
    </Container>
    <br />
  </>
);

export default BaseLayout;
