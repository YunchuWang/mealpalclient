import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link } from 'react-router';
import {aol,email,renderField,required,validate} from './validate';


const DevSignInForm = (props) => {
    const {  handleChange, emailvalue, password,submitting,handleSubmit } = props
    return (
        <form className="login" onSubmit={handleSubmit}>

            <Field idval="loginemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={required} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="loginpass" name="password" type="password"
                   component={renderField} label="Password"
                   value={password} validate={required}
                   handleChange={handleChange}
            />
            <Link to="/DevSignUpContainer">
                <input type="button" value="Get Started" className="signupbutton" />
            </Link>
            <input type ="submit" value ="Log In" className = "signupbutton" />
        </form>
    )
}

export default reduxForm({
    form: 'devSignInForm'

})(DevSignInForm)