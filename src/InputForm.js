import React from 'react';
import axios from 'axios';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
            phonenumber: '',
            creditcard: '',
            expiration: '',
            cvv: '',
            billingzip: ''
        }

        this.completePurchase = this.completePurchase.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLasttName = this.handleLasttName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleCreditCard = this.handleCreditCard.bind(this);
        this.handleExpiration = this.handleExpiration.bind(this);
        this.handleCVV = this.handleCVV.bind(this);
        this.handleBillingCode = this.handleBillingCode.bind(this);

    }

    completePurchase() {

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
            creditcard: this.state.creditcard,
            expiration: this.state.expiration,
            cvv: this.state.cvv,
            billingzip: this.state.billingzip
        }

        axios.post('http://localhost:3000/payment', {user})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          event.preventDefault();
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

    handlePhoneNumber(event) {
        this.setState({phonenumber: event.target.value});
    }

    handleCVV(event) {
        this.setState({cvv: event.target.value});
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
            <form onSubmit={this.completePurchase}>
                <fieldset>
                    <legend>Form data:</legend>
          
                    First Name: <input value={this.state.firstname} type="text" id="firstName" onChange={this.handleFirstName} /><br />
                    Last Name: <input value={this.state.lastname} type="text" id="lastName" onChange={this.handleLasttName} /><br />
                    Email: <input value={this.state.email} type="email" id="email" onChange={this.handleEmail} /><br />
        
                    Password: <input value={this.state.password} type="password" id="password" onChange={this.handlePassword} /><br />
            
                    Address: <textarea value={this.state.address} id="address" rows="4" cols="100" maxlength="500" onChange={this.handleAddress} ></textarea><br /><br />
                    Phone Number: <input value={this.state.phonenumber} id="phone" rows="4" cols="100" maxlength="500" onChange={this.handlePhoneNumber} ></input><br /><br />
                    Credit Card Number: <input value={this.state.creditcard} type="creditcard" id="creditcard" onChange={this.handleCreditCard} /><br />
                    Expiration Date: <input value={this.state.expiration} type="expirationdate" id="expdate" onChange={this.handleExpiration} /><br />
                    CVV: <input value={this.state.cvv} type="expirationdate" id="cvv" onChange={this.handleCVV} /><br />
                    Billing Code Zip Code: <input value={this.state.billingzip} type="billingzip" id="zip" onChange={this.handleBillingCode} /><br />
        
                    <input type="submit" value="Submit" />
                <input type="reset" value="Reset Form" />
                </fieldset>
            </form>
        )};
}