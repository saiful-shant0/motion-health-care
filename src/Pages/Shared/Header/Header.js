import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

import logo from '../../../images/logo150.png'
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">


                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"> <img
                        alt=""
                        src={logo}

                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        </Nav>


                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                        {user?.email ? <Button onClick={logOut} variant="light">Log Out</Button>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;