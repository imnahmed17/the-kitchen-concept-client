import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Counting from '../Counting/Counting';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import { AuthContext } from '../../providers/AuthProvider';
import Recipes from '../Recipes/Recipes';
import AboutUs from '../AboutUs/AboutUs';

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
            <section>
                <Banner />
            </section>
            
            <section className='border border-2'>
                <Counting />
            </section>
            
            <section className='mt-5'>
                <h2 className='text-center fw-semibold mb-4'>Our Master Chefs</h2>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            allChefs.map(chef => <Chef key={chef._id} chef={chef} />)
                        }
                    </Row>
                </Container>
            </section>
            
            <section className='mt-5'>
                <h2 className='text-center fw-semibold mb-4'>Recipes</h2>
                <Container>
                    <Recipes />
                </Container>
            </section>
            
            {/* <Container className='extra-section'>
                <div>
                    <img className='w-100 h-100 im' src="https://i.ibb.co/cQ2j3cJ/img1.png" alt="" />
                </div>
                <div>
                    <p className='bg-warning mt-5 p-5 justify rounded-4'>Introducing our latest culinary creation - a dish that's sure to tantalize your taste buds and leave you feeling fully satisfied. Our [insert food item] is the perfect combination of bold flavors and hearty ingredients, creating a meal that's both indulgent and comforting. Starting with the freshest ingredients, our skilled chefs carefully prepare each component of this dish with precision and care. The result? A perfectly cooked [insert food item], topped with a flavorful sauce that's bursting with herbs and spices.</p>
                </div>
                <div>
                    <p className='bg-warning mt-5 p-5 justify rounded-4 me-4'>But that's not all - we've added our own twist to this classic dish by incorporating [insert unique ingredient or cooking technique], which takes the flavor profile to the next level. The end result is a dish that's rich, complex, and deeply satisfying. And don't forget about our sides - each one has been carefully selected to complement the main event. From perfectly roasted vegetables to creamy mashed potatoes, our sides are the perfect addition to any meal.</p>
                </div>
                <div>
                    <img className='img' src="https://i.ibb.co/cQ2j3cJ/img1.png" alt="" />
                </div>
            </Container> */}

            <section className='mt-5'>
                <Container className='pt-4'>
                    <AboutUs />
                </Container>
            </section>
        </div>
    );
};

export default Home;