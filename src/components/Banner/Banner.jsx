import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import banner from '../../assets/banner.png';
import plate from '../../assets/plate.json';

const Banner = () => {
    return (
        <div className='d-flex align-items-center' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '670px' }}>
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        {/* Lottie Animation */}
                        <div className='d-flex justify-content-center'>
                            <Lottie className='d-none d-md-block' style={{width: '250px'}} animationData={plate} loop={true} />
                        </div>
                        <div className='mt-3'>
                            <h1 className='text-danger text-center'>Healthy Food Items </h1>
                            <p className='text-center'>Kitchen Concept is a website that offers a fresh perspective on kitchen design and functionality. Whether you're a professional chef or an amateur cook, Kitchen Concept provides innovative ideas and inspiration to help you create the perfect kitchen space for your needs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;