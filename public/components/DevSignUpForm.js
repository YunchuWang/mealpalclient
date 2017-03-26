import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {email,validate} from './validate';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, value,handleChange,idval, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input id={idval} {...input} placeholder={label} type={type} value={value} onChange={handleChange}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


const DevSignUpForm = (props) => {
    const { handleSubmit, handleChange, emailvalue, password, firstname, lastname,username,passwordconfirm } = props
    return (
        <form className="login signup" onSubmit={handleSubmit}>
            <Field idval="firstname" name="firstname" type="text"
                   component={renderField} label="First Name"
                    value={firstname}
                    handleChange={handleChange}
            />
            <Field idval="lastname" name="lastname" type="text"
                   component={renderField} label="Last Name"
                    value={lastname}
                    handleChange={handleChange}
            />
            <Field idval="signemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={email} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="signid" name="email" type="text"
                   component={renderField} label="User Id"
                   value={username}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="signpass" name="password" type="password"
                   component={renderField} label="Password"
                    value={password}
                    handleChange={handleChange}
            />
            <Field idval="signpasscon" name="password" type="password"
                   component={renderField} label="Confirm Password"
                   value={passwordconfirm}
                    handleChange={handleChange}
            />
            <input type="submit" value="Sign up" className="signupbutton" />
        </form>
    )
    }

    export default reduxForm({
        form: 'devSignUpForm' // a unique identifier for this form
    })(DevSignUpForm)