import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Recipes = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={4}>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/cQ2j3cJ/img1.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/xMrznVb/img2.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/HKTWt9q/img3.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/tKj8p87/img4.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4}>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/fFhNWKQ/img5.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/XDVhPXX/img6.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/nDDKcB8/img7.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
                <Col className="px-0">
                    <LazyLoadImage 
                        src="https://i.ibb.co/mbf8T2D/img8.png"
                        style={{ width: '100%', height: '100%' }}
                        effect="blur"
                        threshold={40}
                        alt=""
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Recipes;