import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { BiLike } from 'react-icons/bi';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { picture, chefName, yearOfExperience, noOfRecipes, recipes, likes } = chefDetails;

    return (
        <Container>
            <Card>
                <Row>
                    <Col md={4}>
                        <Card.Img  src={picture} />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>Name: {chefName}</Card.Title>
                            <Card.Text>
                                <span className='fw-semibold'>Description:</span> Experienced, passionate, and creative chef who worked at your restaurant for many years, with exceptional cooking skills, leadership qualities, and a signature style of cooking.
                                <br />
                                <span className='fw-semibold'>Year of Experience:</span> {yearOfExperience}
                                <br />
                                <span className='fw-semibold'>No of recipes:</span> {noOfRecipes}
                                <br />
                                <span className='d-flex align-items-center'>
                                    <BiLike /> <span className='ms-2'>{likes}</span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            
            <section>
                <h3 className='text-center fw-semibold my-4'>Recipes</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        recipes.map(recipe => <Recipe key={recipe.idMeal} recipe={recipe} />)
                    }
                </Row>
            </section>
        </Container>
    );
};

export default ChefDetails;