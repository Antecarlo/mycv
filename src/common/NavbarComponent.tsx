import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavbarComponent.css';

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Carlos Antequera Sánchez</Navbar.Brand>
        <Nav>
          <a className="link" href='/mycv/#About'>About</a>
          <a className="link" href="/mycv/#Experience">Experience</a>
          <a className="link" href="/mycv/#Education">Education</a>
          <a className="link" href="/mycv/#Skills">Skills</a>
          <a className="link" href="/mycv/#Interests">Interests</a>
        </Nav>
      </Navbar>
    )
}
