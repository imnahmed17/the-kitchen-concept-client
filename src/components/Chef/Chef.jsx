import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Chef = ({ chef }) => {
    const { _id, picture, chefName, yearOfExperience, noOfRecipes, likes } = chef;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        Year of Experience: {yearOfExperience}
                        <br />
                        No of recipes: {noOfRecipes}
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to={`/chefs/${_id}`}>
                            <Button className='border-0' style={{ backgroundColor: '#f47825' }}>View Recipes</Button>
                        </Link>
                        <div className='d-flex align-items-center'>
                            <BiLike /> <span className='ms-2'>{likes}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Chef;