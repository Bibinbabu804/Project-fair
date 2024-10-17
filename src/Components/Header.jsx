import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
           <Navbar  expand="lg" style={{backgroundColor:'navy', height:'80px'}} className="bg-">
      <Container fluid>
        <Link className='text-decoration-none' to={'/'}>
        <Navbar.Brand className='text-light fs-3' href="#">Project-Fair</Navbar.Brand>
        
        </Link>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll

    
          >
            <Link className='text-decoration-none' to={'/'}>
            <Nav.Link className='text-light' href="#action1">Home</Nav.Link>
            
            </Link>

            <Link className='text-decoration-none' to={'/projects'}>

            <Nav.Link className='text-light' href="#action2">Projects</Nav.Link>
            
            </Link>


            <Link className='text-decoration-none' to={'/dashboard'}>
            <Nav.Link className='text-light' href="#action1">Dashboard</Nav.Link>
            
            </Link>
            
            
             
            
         
          </Nav>
          
            
            <Link to={'/login'}>

            <Button  variant="outline-light">Login</Button>
            
            </Link>
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header