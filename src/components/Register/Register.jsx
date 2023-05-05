import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, updateUserData } = useContext(AuthContext);
    useTitle('Register');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be greater than 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                setSuccess('User has been created successfully');
                // set user name and photo
                updateUserData(result.user, name, photo)
                    .then(() => {
                        console.log('User name and photo updated');
                    })
                    .catch(error => {
                        setError(error.message);
                    })
                form.reset();
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })

        
    };

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    };

    return (
        <Container className='mx-auto'>
            <Row>
                <Col md={3} lg={4}></Col>
                <Col md={6} lg={4}>
                    <h3>Please Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show ? "text" : "password"} name='password' placeholder="Password" required />
                            <p onClick={() => setShow(!show)}>
                                <small>
                                    {
                                        show ? <span>Hide Password</span>: <span>Show Password</span>
                                    }
                                </small>
                            </p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type={show ? "text" : "password"} name='confirmPassword' placeholder="Confirm Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                onClick={handleAccepted} 
                                type="checkbox" 
                                name="accept" 
                                label={<>I accept the <Link to="/terms" style={{ textDecoration: 'none' }}>Terms and Conditions</Link></>} 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!accepted} className='w-100'>Register</Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to="/login">Login</Link>
                        </Form.Text>
                        <br />
                        <Form.Text className="text-success">{success}</Form.Text>
                        <Form.Text className="text-danger">{error}</Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;