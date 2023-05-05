import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Feedbacks = () => {
    return (
        <Container>
            <Row>
                <Col md={5} lg={4}>
                    <div className='mb-3'>
                        <LazyLoadImage
                            src="https://i.ibb.co/mSd1t4J/64.png"
                            style={{ width: '100%', height: '100%' }}
                            className='rounded-5'
                            effect="blur"
                            threshold={40}
                            alt=""
                        />
                    </div>
                </Col>
                <Col md={7} lg={8}>
                    <div className='h-100 d-flex align-items-start align-items-lg-center'>
                        <p className='bg-warning p-5 justify rounded-5'>
                            I recently visited Kitchen Concept's website and I was thoroughly impressed by the design and functionality of the site. The layout is modern and visually appealing, making it easy to navigate and find what I need. The information provided about each product is detailed and helpful. Overall, I had a great experience on the Kitchen Concept website and would highly recommend it to anyone looking for kitchen products.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='flex-column-reverse flex-md-row'>
                <Col md={7} lg={8}>
                    <div className='h-100 d-flex align-items-start align-items-lg-center'>
                        <p className='bg-warning p-5 justify rounded-5'>
                            I recently stumbled upon Kitchen Concept and I have to say, I'm very impressed! The website is visually stunning and the layout is very easy to navigate. I was able to find exactly what I was looking for with ease - from kitchen gadgets to recipes and even design ideas. The content is informative and engaging, and I appreciate the variety of topics covered. Overall, I highly recommend Kitchen Concept to anyone looking for inspiration and information related to all things kitchen!
                        </p>
                    </div>
                </Col>
                <Col md={5} lg={4}>
                    <div className='mb-3'>
                        <LazyLoadImage 
                            src="https://i.ibb.co/XZmZ0GY/72.png"
                            style={{ width: '100%', height: '100%' }}
                            className='rounded-5'
                            effect="blur"
                            threshold={40}
                            alt=""
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Feedbacks;