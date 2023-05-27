import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import RoutingControl from './RoutingControl';

const FindUs = () => {
    const redIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/3699/3699561.png',
        iconSize: [25, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const waypoints = [
        L.latLng(23.76520775635643, 90.4123689096609),
        L.latLng(23.762389620175203, 90.4159597194101)
    ];

    return (
        <Row className='flex-column-reverse flex-lg-row'>
            <Col lg={7}>
                <MapContainer 
                    center={[23.76409424382421, 90.41380841837086]}   
                    zoom={13} 
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.763974998380466, 90.41380841837086]} icon={redIcon}>
                        <Tooltip>Here, we are located</Tooltip>
                    </Marker>
                    <RoutingControl />
                </MapContainer>
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