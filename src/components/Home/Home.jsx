import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Counting from '../Counting/Counting';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Spinner } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import { AuthContext } from '../../providers/AuthProvider';
import Recipes from '../Recipes/Recipes';

const Home = () => {
    const allChefs = useLoaderData();
    // console.log(allChefs);

    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <Spinner animation="border" variant="primary" size="lg" />
                <h3 className="ms-3">Loading...</h3>
            </div>
        );
    }

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
            <section className='mt-5'>
                <h2 className='text-center fw-bold mb-4'>Recipes</h2>
                <Container className='carousel'>
                    <Recipes />
                </Container>
            </section>
        </div>
    );
};

export default Home;