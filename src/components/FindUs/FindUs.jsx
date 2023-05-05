import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 23.768289955741785, 
    lng: 90.42322838214005
};

const FindUs = () => {
    return (
        <Row className='flex-column-reverse flex-lg-row'>
            <Col lg={7}>
                <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </Col>
            <Col lg={5}>
                <h2 className='text-center text-lg-start fw-semibold mb-2'>Find Us</h2>
                <p className='justify mb-4'>
                    We are located at Dhaka, Bangladesh, and we'd love for you to come visit us. To get to our store, you can use the map below to see our exact location. If you're driving, we have parking spaces available for our customers. And if you're taking public transportation, we're conveniently located near the Rampura Bridge.
                    <br /> <br />
                    If you need any assistance finding us, please don't hesitate to reach out to our team by phone at 555-555-5555 or email at info@kitchenconcept.com. We're always happy to help guide you to our store.
                    <br /> <br />
                    We look forward to seeing you soon at Kitchen Concept!
                </p>
            </Col>
        </Row>
    );
};

export default FindUs;