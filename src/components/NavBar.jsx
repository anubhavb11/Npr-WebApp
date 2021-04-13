import React from 'react'
import {Navbar,Nav,Form,FormControl,Button }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends React.Component {
  render() {
      return(
    <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="#home">Monaal Creation</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inventory</Nav.Link>
        <Nav.Link href="#sales">Sales/Out Challan</Nav.Link>
        <Nav.Link href="#clent">Client/Customer</Nav.Link>
        <Nav.Link href="#user">User</Nav.Link>
        <Nav.Link href="#po">PO</Nav.Link>
        <Nav.Link href="#payment">Payment</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      )
  }
}

