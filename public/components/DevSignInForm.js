import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router';
import {renderField,validateLogIn} from './validate';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class DevSignInForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="login" onSubmit={this.props.handleSubmit(this.props.mySubmit)} autoComplete="off">
                <div id="eww">
                    <Field  name="email"
                            component={renderField} label="Email"
                    />
                    <Field name="password" type="password"
                           component={renderField} label="Password"
                    />
                </div>
                <Link to="/DevSignUpContainer">
                    <button type ="button" id="logButtons" className = "signupbutton">
                        Get Started
                    </button>
                </Link>
                <button type ="submit" id = "logButtons" className = "signupbutton" >Log In</button>

            </form>
        )
    }



}



export default reduxForm({
    form: 'devSignInForm',
    validate: validateLogIn
})(DevSignInForm)
//