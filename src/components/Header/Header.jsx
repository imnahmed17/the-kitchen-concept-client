import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user && <Nav.Link href="#profile">
                                        <FaUserCircle style={{ fontSize: '2rem' }} />
                                    </Nav.Link>
                                }
                                {
                                    user ?
                                        <Nav.Link href="/">
                                            <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                        </Nav.Link>
                                        :
                                        <Nav.Link href="/login">
                                            <Button variant="secondary">Login</Button>
                                        </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <hr className='mt-0' />
        </div>
        
    );
};

export default Header;