import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Recipes = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={4}>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/cQ2j3cJ/img1.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/xMrznVb/img2.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/HKTWt9q/img3.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/tKj8p87/img4.png" alt="" />
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4}>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/fFhNWKQ/img5.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/XDVhPXX/img6.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/nDDKcB8/img7.png" alt="" />
                </Col>
                <Col className="px-0">
                    <img className='w-100 h-100' src="https://i.ibb.co/mbf8T2D/img8.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Recipes;