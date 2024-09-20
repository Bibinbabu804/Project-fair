import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
           <Navbar  expand="lg" style={{backgroundColor:'navy', height:'80px'}} className="bg-">
      <Container fluid>
        <Navbar.Brand className='text-light fs-3' href="#">Project-Fair</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-light' href="#action2">Projects</Nav.Link>
             
            <Nav.Link className='text-light' href="#action1">Dashboard</Nav.Link>
         
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header