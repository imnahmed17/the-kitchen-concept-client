import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
                        <Navbar.Brand href="/" className='fw-semibold fs-4'>Kitchen Concept</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <li className='me-3'>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                                </li>
                            </Nav>
                            <Nav className='align-items-md-center'>
                                {/* user image */}
                                {
                                    user && <Image 
                                        style={{ width: '40px', height: '40px' }} 
                                        src={user.photoURL} 
                                        title={user.displayName} 
                                        roundedCircle 
                                    />
                                }
                                {/* toggle between login and logout button */}
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
        </div>
        
    );
};

export default Header;