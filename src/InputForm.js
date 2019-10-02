import React from 'react';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
            creditcard: '',
            expiration: '',
            billingzip: ''
        }

        this.completePurchase = this.completePurchase.bind(this);
    }

    completePurchase() {
        // function to send state data into database


    }

    handleFirstName(event) {
        this.setState({firstname: event.target.value});
    }

    handleLasttName(event) {
        this.setState({lastname: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleAddress(event) {
        this.setState({address: event.target.value});
    }

    handleCreditCard(event) {
        this.setState({creditcard: event.target.value});
    }

    handleExpiration(event) {
        this.setState({expiration: event.target.value});
    }

    handleBillingCode(event) {
        this.setState({billingzip: event.target.value});
    }

    render() {
        return (
            <form action="form.aspx" method="get" autocomplete="on" onSubmit={()=> {this.completePurchase}}>
                <fieldset>
                    <legend>Form data:</legend>
          
                    First Name: <input value={this.state.firstname} type="text" id="firstName" placeholder="enter first name" onChange={this.handleFirstName} /><br />
                    Last Name: <input value={this.state.lastname} type="text" id="lastName" placeholder="enter last name" onChange={this.handleLasttName} /><br />
                    Email: <input value={this.state.email} type="email" id="email" placeholder="enter email" onChange={this.handleEmail} /><br />
        
                    Password: <input value={this.state.password} type="password" id="password" placeholder="enter password" onChange={this.handlePassword} /><br />
            
                    Address: <textarea value={this.state.address} id="Address" rows="4" cols="100" maxlength="500" placeholder="enter address" onChange={this.handleAddress} ></textarea><br /><br />
        
                    Credit Card Number: <input value={this.state.creditcard} type="password" id="tpassword" placeholder="enter password" onChange={this.handleCreditCard} /><br />
                    Expiration Date: <input value={this.state.expiration} type="password" id="tpassword" placeholder="enter password" onChange={this.handleExpiration} /><br />
                    Billing Code Zip Code: <input value={this.state.billingzip} type="password" id="tpassword" placeholder="enter password" onChange={this.handleBillingCode} /><br />
        
                    <input type="submit" value="Submit" />
                <input type="reset" value="Reset Form" />
                </fieldset>
            </form>
        )};
}