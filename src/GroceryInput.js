import React from 'react';

const GroceryInput = props => {
    return (
        <div id="groceryInput">
            <input onChange={props.updateGroceryItem} value={props.currentItem}></input>
            <button onClick={props.addItem}>Submit</button>
        </div>
    )
};

export default GroceryInput;