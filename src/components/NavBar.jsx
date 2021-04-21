import React from 'react'
import {Navbar,Nav,NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function NavBar(){
 
      return(
    <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="#home">Monaal Creation</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      

        <NavDropdown title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">View Inventory</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">View Summary</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Sales/Out Challan" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">View Challans</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">Verify Challans</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#clent">Client/Customer</Nav.Link>
        <Nav.Link href="#user">User</Nav.Link>
        <Nav.Link href="#po">PO</Nav.Link>
        <Nav.Link href="#payment">Payment</Nav.Link>

      
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      )
  
}

export default NavBar;  


