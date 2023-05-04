import React from 'react';
import { Container } from 'react-bootstrap';

const Counting = () => {
    return (
        <Container>
            <div className='d-flex flex-column flex-md-row justify-content-between py-5'>
                <div>
                    <h1 className='fw-bold' style={{ color: '#f47825' }}>300+</h1>
                    <p>Our registered member</p>
                </div>
                <div>
                    <h1 className='fw-bold' style={{ color: '#f47825' }}>150+</h1>
                    <p>Online recipes</p>
                </div>
                <div>
                    <h1 className='fw-bold' style={{ color: '#f47825' }}>50+</h1>
                    <p>Master chef mentor</p>
                </div>
                <div>
                    <h1 className='fw-bold' style={{ color: '#f47825' }}>20+</h1>
                    <p>Vendor platform partner</p>
                </div>
            </div>
        </Container>
    );
};

export default Counting;