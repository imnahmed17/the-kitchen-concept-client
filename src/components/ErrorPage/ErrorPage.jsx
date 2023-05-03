import React from 'react';
import Lottie from "lottie-react";
import errorJson from '../../assets/error.json';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <Container>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <div>
                        <Lottie animationData={errorJson} loop={true} />
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                        <p className='text-danger me-4'>{error?.message}</p>
                        <Link to='/' className='errorBtn'>Back to homepage</Link>
                    </div>
                </Col>
            </Row>
            
        </Container>
    );
};

export default ErrorPage;