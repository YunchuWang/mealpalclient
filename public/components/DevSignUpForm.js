import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {email,validate,renderField,aol,required,maxLength15} from './validate';



const DevSignUpForm = (props) => {
    const { pristine,submitting,handleSubmit, handleChange, emailvalue, password, firstname, lastname,username,passwordconfirm } = props
    return (
        <form className="login signup" onSubmit={handleSubmit}>
            <Field idval="firstname" name="firstname" type="text"
                   component={renderField} label="First Name"
                   value={firstname} validate={[required,maxLength15]}
                   handleChange={handleChange}
            />
            <Field idval="lastname" name="lastname" type="text"
                   component={renderField} label="Last Name"
                   value={lastname} validate={[required,maxLength15]}
                   handleChange={handleChange}
            />
            <Field idval="signemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={[required,email]} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="signid" name="email" type="text"
                   component={renderField} label="User Id"
                   value={username}
                   validate={[required,maxLength15]} handleChange={handleChange}
            />
            <Field idval="signpass" name="password" type="password"
                   component={renderField} label="Password"
                   value={password} validate={[required]}
                   handleChange={handleChange}
            />
            <Field idval="signpasscon" name="password" type="password"
                   component={renderField} label="Confirm Password"
                   value={passwordconfirm} validate={[required]}
                   handleChange={handleChange}
            />
            <button type="submit" className="signupbutton">Sign up</button>
        </form>
    )
}

export default reduxForm({
    form: 'devSignUpForm' // a unique identifier for this form
})(DevSignUpForm)