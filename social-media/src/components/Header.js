import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function Header() {
  return (
        
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Social Tweeter</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Notifications</Nav.Link>
          <Nav.Link href="#pricing">Messages</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      
     
   


  );
}

export default Header;




 {/* <Button variant="outline-dark">Home</Button>{' '}
      <Button variant="outline-dark">Notifications</Button>{' '}
      <Button variant="outline-dark">Messages</Button>{' '}
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
      <Button variant="outline-dark">Tweet</Button>{' '} */}
