import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutUs = () => {
    return (
        <Row>
            <Col md={7} lg={6}>
                <h2 className='text-center text-md-start fw-semibold mb-2'>About Us</h2>
                <p className='justify'>
                    Welcome to Kitchen Concept, where we bring you the best of Italian cuisine from master chefs across the world. Our passion for cooking and food culture led us to create this website, where you can find authentic Italian recipes, cooking tips, and inspiration.  
                    <br />
                    At Kitchen Concept, we believe that cooking and eating should be a joyful experience that brings people together. That's why we strive to make our recipes and content accessible to anyone, regardless of their skill level or background. Whether you're an experienced home cook or just starting out, we hope that our website will inspire you to try new recipes and explore the world of Italian cuisine.
                    <br />
                    Thank you for visiting our site, and please feel free to contact us with any questions or feedback. Buon appetito!
                </p>
            </Col>
            <Col lg={2} className='d-none d-lg-block'></Col>
            <Col md={5} lg={4}>
                <div className='h-100 d-flex align-items-center'>
                    <LazyLoadImage 
                        src="https://i.ibb.co/tCWnbXW/img9.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </div>
            </Col>
        </Row>
    );
};

export default AboutUs;