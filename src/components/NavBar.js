import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
    return ( 
        <>
        <Navbar className="no-bg" expand="lg" >
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon={faUserAstronaut} color="white" size="4x"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#presentation" className="text-white">NASA</Nav.Link>
                <Nav.Link href="#earth" className="text-white">La Terre</Nav.Link>
                <Nav.Link href="#mars" className="text-white">Mars</Nav.Link>
                <Nav.Link href="/space" className="text-white">Système solaire</Nav.Link>
                <Nav.Link href="/stargate" className="text-white">Stargate</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
     );
}
 
export default NavBar;