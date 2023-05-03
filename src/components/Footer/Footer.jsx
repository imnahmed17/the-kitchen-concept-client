import React from 'react';
import img1 from '../../assets/group-icon.png';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark text-light'>
            <footer className='py-5'>
                <Container>
                    <Row>
                        <Col lg={3} sm={12}>
                            <h2>Kitchen Concept</h2>
                            <p>Revamp Your Kitchen with Innovative Ideas and Design Inspiration - Discover Kitchen Concept Today!</p>
                            <div className='mb-3'>
                                <img style={{ width: '140px' }} src={img1} alt="" />
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <h4 className='text-warning'>Company</h4>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Work</li>
                                <li>Latest Items</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col lg={2} xs={6}>
                            <h4 className='text-warning'>Product</h4>
                            <ul className="list-unstyled">
                                <li>Prototype</li>
                                <li>Plans & Pricing</li>
                                <li>Customers</li>
                                <li>Integrations</li>
                            </ul>
                        </Col>
                        <Col lg={2} xs={6}>
                            <h4 className='text-warning'>Support</h4>
                            <ul className="list-unstyled">
                                <li>Help Desk</li>
                                <li>Sales</li>
                                <li>Become a Partner</li>
                                <li>Developers</li>
                            </ul>
                        </Col>
                        <Col lg={3} xs={6}>
                            <h4 className='text-warning'>Contact Us</h4>
                            <p>123 Kitchen Street<br/>City, State ZIP<br/>Phone: 555-555-5555<br/>Email: info@kitchenconcept.com</p>
                        </Col>
                    </Row>
                    <div className='d-flex flex-column flex-md-row justify-content-between text-center'>
                        <p><small>@2023 <span className='fw-bold'>Kitchen Concept</span>. All Rights Reserved</small></p>
                        <p><small>Powered by <span className='fw-bold'>Kitchen Concept</span></small></p>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;