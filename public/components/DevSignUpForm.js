import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {email,renderField,aol,required,maxLength15,validate} from './validate';



const DevSignUpForm = (props) => {
    const { onSubmit,pristine,submitting,handleSubmit, emailvalue, password, firstname, lastname,username,passwordconfirm } = props

    return (
        <form className="login signup" onSubmit={handleSubmit(onSubmit)} >
            <Field name="firstname" type="text"
                   component={renderField} label="First Name"
                   value={firstname} validate={required}
            />
            <Field name="lastname" type="text"
                   component={renderField} label="Last Name"
                   value={lastname} validate={required}
            />
            <Field  name="email" type="email"
                   component={renderField} label="Email"
                   validate={required} value={emailvalue}
                   warn={aol}
            />
            <Field name="username" type="text"
                   component={renderField} label="User Id"
                   value={username}
                   validate={required}
            />
            <Field  name="password" type="password"
                   component={renderField} label="Password"
                   value={password} validate={required}
            />
            <Field  name="confirmpassword" type="password"
                   component={renderField} label="Confirm Password"
                   value={passwordconfirm} validate={required}
            />
            <button type="submit" className="signupbutton" >Sign up</button>
        </form>
    )
}

export default reduxForm({
    form: 'devSignUpForm',
    validate
})(DevSignUpForm)