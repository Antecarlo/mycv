import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Carlos Antequera Sánchez</Navbar.Brand>
        <Nav>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Experience">Experience</Nav.Link>
          <Nav.Link href="/Education">Education</Nav.Link>
          <Nav.Link href="/Skills">Skills</Nav.Link>
          <Nav.Link href="/Interests">Interests</Nav.Link>
        </Nav>
      </Navbar>
    )
}
