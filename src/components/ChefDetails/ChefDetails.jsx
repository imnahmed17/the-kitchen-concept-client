import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { noOfRecipes, recipes } = chefDetails;

    return (
        <div>
            <p>{noOfRecipes}</p>
            {
                recipes.map(recipe => <div><p>{recipe.strMeal}</p></div>)
            }
        </div>
    );
};

export default ChefDetails;