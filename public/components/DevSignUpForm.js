import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {email,renderField,aol,required,maxLength15,validate} from './validate';



const DevSignUpForm = (props) => {
    const { onSubmit,pristine,submitting,handleSubmit, handleChange, emailvalue, password, firstname, lastname,username,passwordconfirm } = props
    return (
        <form className="login signup" onSubmit={handleSubmit(onSubmit)} >
            <Field idval="firstname" name="firstname" type="text"
                   component={renderField} label="First Name"
                   value={firstname} validate={required}
                   handleChange={handleChange}
            />
            <Field idval="lastname" name="lastname" type="text"
                   component={renderField} label="Last Name"
                   value={lastname} validate={required}
                   handleChange={handleChange}
            />
            <Field idval="signemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={required} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="signid" name="email" type="text"
                   component={renderField} label="User Id"
                   value={username}
                   validate={required} handleChange={handleChange}
            />
            <Field idval="signpass" name="password" type="password"
                   component={renderField} label="Password"
                   value={password} validate={required}
                   handleChange={handleChange}
            />
            <Field idval="signpasscon" name="password" type="password"
                   component={renderField} label="Confirm Password"
                   value={passwordconfirm} validate={required}
                   handleChange={handleChange}
            />
            <button type="submit" className="signupbutton" >Sign up</button>
        </form>
    )
}

export default reduxForm({
    form: 'devSignUpForm',
    validate // a unique identifier for this form
})(DevSignUpForm)