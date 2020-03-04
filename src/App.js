import React from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';
import GroceryInput from './GroceryInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: ['chips & guac', 'carrots', 'black truffle pizza for dinner', 'beer to celebrate the juniors passing the TA!'],
            groceryItem: ''
        }

        this.addItem = this.addItem.bind(this);
        this.updateGroceryItem = this.updateGroceryItem.bind(this);
    }

    // added a comment

    // Initialize GET request to retrieve grocery list items from database

    // Initialize POST request to ADD grocery list items from database

    // Initialize POST request to ADD grocery list items from database

    addItem() {
        this.setState({
            groceryList: [...this.state.groceryList, this.state.groceryItem],
            groceryItem: ''
        })
    }

    updateGroceryItem(event) {
        this.setState({
            groceryItem: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Rob's Grocery List</h1>
                <GroceryInput updateGroceryItem={this.updateGroceryItem} addItem={this.addItem} currentItem={this.state.groceryItem} />
                <GroceryList groceryList={this.state.groceryList} />
            </div>
    )};
}