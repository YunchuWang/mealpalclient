import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router';
import {aol,email,required,renderField,validate} from './validate';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class DevSignInForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="login" onSubmit={this.props.handleSubmit(this.props.mySubmit)}>

                <Field idval="loginemail" name="email" type="email"
                       component={renderField} label="Email"
                       value={this.props.emailvalue}
                       warn={aol}
                />
                <Field idval="loginpass" name="password" type="password"
                       component={renderField} label="Password"
                       value={this.props.password}
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
    validate
})(DevSignInForm)
