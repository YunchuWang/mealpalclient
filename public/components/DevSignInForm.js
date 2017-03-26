import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {aol,email,renderField,required} from './validate';


const DevSignInForm = (props) => {
    const { handleSubmit, handleChange, emailvalue, password } = props
    return (
        <form className="login" onSubmit={handleSubmit}>

            <Field idval="loginemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={[email,required]} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="loginpass" name="password" type="password"
                   component={renderField} label="Password"
                   value={password} validate={[required]}
                   handleChange={handleChange}
            />
            <Link to="/DevSignUpContainer">
                <input type="button" value="Get Started" className="signupbutton" />
            </Link>
            <button type ="submit" value ="Log In" className = "signupbutton">Log In</button>
        </form>
    )
}

export default reduxForm({
    form: 'devSignInForm' // a unique identifier for this form
})(DevSignInForm)