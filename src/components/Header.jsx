import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap'
//import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
          <Navbar.Brand href= "/"> Neethu Sunder </Navbar.Brand>
          <Nav className="me-auto">

        
          < Nav.Link href= "/">Home</Nav.Link>
            <Nav.Link href= "/about">About</Nav.Link>
            <Nav.Link href= "/project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header