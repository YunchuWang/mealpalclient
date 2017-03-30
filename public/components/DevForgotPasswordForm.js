import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router';
import {renderField,validateLogIn} from './validate';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class DevForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="login" onSubmit={this.props.handleSubmit(this.props.mySubmit)} autoComplete="off">
                <div id="forgotemail">
                    <h5 className="resetText">Enter your email to reset password:</h5>
                    <Field  name="email"
                            component={renderField} label="Email"
                    />
                </div>
                <button type ="submit" id="logButtons" className = "signupbutton">
                        Send reset email
                </button>


            </form>
        )
    }



}



export default reduxForm({
    form: 'devForgotPasswordForm',
    validate: validateLogIn
})(DevForgotPasswordForm)
//