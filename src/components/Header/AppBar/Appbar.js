import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GoWatch } from "react-icons/go";
import "./Appbar.css";

const Appbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 30 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Navbar
        className={navbar ? "navbar active" : "navbar"}
        fixed="top"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <GoWatch /> Rolex
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
