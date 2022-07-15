import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Reed Creative Werx</Navbar.Brand>
          <Nav>
            <Nav.Link>Software Developer</Nav.Link>
            <Nav.Link>Photography</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header