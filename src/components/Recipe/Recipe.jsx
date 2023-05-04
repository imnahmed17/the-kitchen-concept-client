import React, { useState } from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const Recipe = ({ recipe }) => {
    const [fold, setFold] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    const { strMeal, strMealThumb, strIngredients, cookingMethod, ratings } = recipe;

    const handleClick = () => {
        setIsDisabled(true);
        toast.success('Marked as your favorite recipe');
    };

    return (
        <Col>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text className='justify'>
                            <span className='fw-semibold'>Ingredients: </span>{strIngredients.join(', ').substring(0, 60)}.....
                            <br />
                            <span className='fw-semibold'>Cooking method: </span> 
                            {
                                fold ? (
                                    <>
                                        <span>{cookingMethod.substring(0, 120)}..... </span>
                                        <span className='cursor-pointer text-primary' onClick={() => setFold(!fold)}>
                                            Read More
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span>{cookingMethod} </span>
                                        <span className='cursor-pointer text-primary' onClick={() => setFold(!fold)}>
                                            Read Less
                                        </span>
                                    </>
                                )
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1 d-flex align-items-center'>
                            <Rating style={{ maxWidth: 100 }} value={ratings || 0} readOnly />
                            <span className='ms-2'> {ratings}</span>
                        </div>
                        <div>
                            <Button variant="light" onClick={handleClick} disabled={isDisabled}>
                                {
                                    isDisabled ? <MdOutlineFavorite size={24} /> : <MdOutlineFavoriteBorder size={24} />
                                }
                            </Button>
                            <Toaster />
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default Recipe;