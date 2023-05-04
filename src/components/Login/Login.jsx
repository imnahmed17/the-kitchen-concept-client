import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const { signIn, resetPassword, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide your email address');
            return;
        }
        resetPassword(email)
            .then(() => {
                alert('Please check your email');
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    };

    return (
        <Container className='mx-auto'>
            <Row>
                <Col md={3} lg={4}></Col>
                <Col md={6} lg={4}>
                    <h3>Please Login</h3>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show ? "text" : "password"} name='password' placeholder="Password" required />
                            <div className='d-flex justify-content-between align-items-center'>
                                <p onClick={() => setShow(!show)}>
                                    <small>
                                        {
                                            show ? <span>Hide Password</span>: <span>Show Password</span>
                                        }
                                    </small>
                                </p>
                                <p><Link onClick={handleResetPassword}><small>Reset Password</small></Link></p>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100'>Login</Button>
                        <br />
                        <Form.Text className="text-secondary">
                            New to Kitchen Concept? <Link to="/register">Register</Link>
                        </Form.Text>
                        <br />
                        <Form.Text className="text-danger">{error}</Form.Text>
                    </Form>
                    <div className='mt-3 d-flex flex-column flex-lg-row gap-2 justify-content-between'>
                        <Button variant="light" onClick={handleGoogleSignIn} className='py-2'>
                            <FcGoogle size={30} /> <small>Log in with Google</small>
                        </Button>
                        <Button variant="light" onClick={handleGithubSignIn} className='py-2'>
                            <FaGithub size={30} /> <small>Log in with GitHub</small>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;