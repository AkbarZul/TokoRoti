import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Nav className="me-auto" className="justify-content-end">
          <a href="https://www.linkedin.com/in/akbar-zulfikar/">
            <FaLinkedin size={30} color="white" />
          </a>
          <a href="https://github.com/AkbarZul">
            <FaGithub size={30} style={{ marginLeft: "15px" }} color="white" />
          </a>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header