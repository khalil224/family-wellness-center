import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => [
        signOut(auth)
    ]

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services" >Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            {
                                user ?
                                    <button
                                        className='btn btn-links text-white '
                                        onClick={handleSignOut}>Logout</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;