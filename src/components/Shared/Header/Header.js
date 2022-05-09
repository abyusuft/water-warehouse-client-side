import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} style={{ height: '50px' }} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <>
                                    <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
                                    <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/manageitems'>Manage Items</Nav.Link>
                                    <button className='border border-0 px-3 py-1 rounded rounded-3' onClick={handleSignOut}>Signout</button>
                                </> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;