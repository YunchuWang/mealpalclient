import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router';
import {required,renderField,validateLogIn} from './validate';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as Actions from '../actions';

class DevSignInForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="login" onSubmit={this.props.handleSubmit(this.props.mySubmit)}>

                <Field  name="email"
                       component={renderField} label="Email"

                />
                <Field name="password"
                       component={renderField} label="Password"

                />
                <Link to="/DevSignUpContainer">
                    <input type="button" value="Get Started" className="signupbutton" />
                </Link>
                <button type ="submit" className = "signupbutton" >Log In</button>
            </form>
        )
    }



}



export default reduxForm({
    form: 'devSignInForm',
    validate: validateLogIn
})(DevSignInForm)
