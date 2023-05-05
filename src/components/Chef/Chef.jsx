import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiLike } from 'react-icons/bi';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = ({ chef }) => {
    const { _id, picture, chefName, yearOfExperience, noOfRecipes, likes } = chef;

    return (
        <Col>
            <Card>
                <LazyLoadImage 
                    src={picture}
                    style={{ width: '100%', height: '100%' }}
                    effect="blur"
                    threshold={40}
                    alt=""
                />
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