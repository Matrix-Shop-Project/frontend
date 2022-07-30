import * as React from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function SplitButton() {


  return (
    <>
<Navbar>
      <Container fluid>
        <Navbar.Toggle aria-controls="dropdown-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown 
              id="dropdown-dark-example"
              title="Category"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/category/damen">Damen</NavDropdown.Item>
              <NavDropdown.Item href="/category/herren">Herren</NavDropdown.Item>
              <NavDropdown.Item href="/category/kinder">Kinder</NavDropdown.Item>
              <NavDropdown.Item href="/category/haushalt">Haushalt</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bitcoin">
                Bitcoin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
   
  );
}
