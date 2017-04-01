import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderField,validateSignUp} from './validate';
import {Link } from 'react-router';

const DevSignUpForm = (props) => {
    const { onSubmit,handleSubmit } = props

    return (
        <form className="login signup" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Field  name="email"
                    component={renderField} label="Email"
            />

            <Field name="username"
                   component={renderField} label="User Id"
            />

            <Field  name="password" type="password"
                    component={renderField} label="Password"

            />

            <Field  name="confirmpassword" type="password"
                    component={renderField} label="Confirm Password"
            />
            <button type="submit" className="signupbutton" id="signupbut">Sign up</button>
            <Link to="/">
                <button type="button" className="signupbutton" id="logButtons" >Back</button>
            </Link>
        </form>
    )
}

export default reduxForm({
    form: 'devSignUpForm',
    validate: validateSignUp
})(DevSignUpForm)