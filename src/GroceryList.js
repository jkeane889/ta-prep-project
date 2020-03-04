import React from 'react';

const GroceryList = props => {
    console.log(props.groceryList)
    return (
        <div>
            <ul>
                {props.groceryList.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default GroceryList;