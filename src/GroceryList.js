import React from 'react';

const GroceryList = props => {
    return (
        <div>
            <ul>
            {props.groceryList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    )
};

export default GroceryList;