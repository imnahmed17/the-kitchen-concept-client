import React from 'react';
import Banner from '../Banner/Banner';
import Counting from '../Counting/Counting';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Home = () => {
    const allChefs = useLoaderData();
    // console.log(allChefs);

    return (
        <div>
            <Banner />
            <section className='border border-2'>
                <Counting />
            </section>
            <section className='mt-5'>
                <h2 className='text-center fw-bold mb-4'>Our Master Chefs</h2>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            allChefs.map(chef => <Chef key={chef._id} chef={chef} />)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;