import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
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

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine,  submitting, handleChange, emailvalue, password } = props
    return (
        <form className="login" onSubmit={handleSubmit}>

            <Field idval="loginemail" name="email" type="email"
                   component={renderField} label="Email"
                   validate={email} value={emailvalue}
                   warn={aol} handleChange={handleChange}
            />
            <Field idval="loginpass" name="password" type="password"
                   component={renderField} label="Password"
                   value={password}
                   warn={aol} handleChange={handleChange}
            />
            <Link to="/DevSignuppage">
                <input type="button" value="Get Started" className="signupbutton" />
            </Link>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                {/*<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>*/}
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)