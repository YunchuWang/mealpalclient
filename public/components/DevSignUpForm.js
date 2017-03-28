import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderField,validateSignUp} from './validate';


const DevSignUpForm = (props) => {
    const { onSubmit,pristine,submitting,handleSubmit, emailvalue, password, firstname, lastname,username,passwordconfirm } = props

    return (
        <form className="login signup" onSubmit={handleSubmit(onSubmit)} >
            <Field name="firstname"
                   component={renderField} label="First Name"

            />
            <Field name="lastname"
                   component={renderField} label="Last Name"

            />
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
            <button type="submit" className="signupbutton" >Sign up</button>
        </form>
    )
}

export default reduxForm({
    form: 'devSignUpForm',
    validate: validateSignUp
})(DevSignUpForm)