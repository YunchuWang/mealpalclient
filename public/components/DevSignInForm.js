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
            <form className="login" onSubmit={this.props.handleSubmit(this.props.mySubmit)}>
                <div id="eww">
                    <Field  name="email"
                            component={renderField} label="Email"

                    />
                    <Field name="password" type="password"
                           component={renderField} label="Password"
                    />
                </div>
                <div id ="peskybutt">
                    <Link to="/DevSignUpContainer">
                        <input type="button" value="Get Started" className="signupbutton" />
                    </Link>
                    <button type ="submit" className = "signupbutton" >Log In</button>
                </div>
            </form>
        )
    }



}



export default reduxForm({
    form: 'devSignInForm',
    validate: validateLogIn
})(DevSignInForm)