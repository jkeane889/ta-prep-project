import React from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';
import GroceryInput from './GroceryInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: [],
            groceryItem: ''
        }

        this.addItem = this.addItem.bind(this);
        this.updateGroceryItem = this.updateGroceryItem.bind(this);
    };

    // Initialize GET request to retrieve grocery list items from database
    componentDidMount() {
        axios.get('/groceries')
        .then(function (response) {
            // update state of grocery list items from database
            console.log("This is the server response: ", response)
            this.setState({
                groceryList: response.body.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // Initialize POST request to ADD grocery list items from database
    

    // Initialize POST request to ADD grocery list items from database
    com
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
                <GroceryInput currentItem={this.state.groceryItem} updateGroceryItem={this.updateGroceryItem} addItem={this.addItem} />
                <GroceryList groceryList={this.state.groceryList} />
            </div>
    )};
}