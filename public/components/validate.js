/**
 * Created by yunchu on 3/25/17.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
//
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined

exports.validateLogIn = (values) => {
    const errors = {}
    const requiredFields = [ 'email','password' ]
    requiredFields.forEach(field => {
        if (!values[ field ] || values[field].trim() === '') {
            errors[ field ] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.unc\.edu$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.password && !/^(?=.*\d).{4,15}$/.test(values.password)) {
        errors.password = 'Password must be between 4 and 15 digits long and include at least one numeric digit.'
    }
    return errors;
}
exports.validateSignUp = (values) => {

    const errors = {}
    const requiredFields = [ 'firstname', 'lastname', 'email', 'username', 'password','confirmpassword' ]
    requiredFields.forEach(field => {
        if (!values[ field ] || values[field].trim() === '') {
            errors[ field ] = 'Required'
        }
    })
    if (values.username && !/^[a-zA-Z0-9][a-zA-Z0-9_]{2,29}$/i.test(values.username)) {
        errors.username = 'Username must be between 3-30 character in length. Starting letter should be a number or a character. No special characters.'
    }
    if (values.confirmpassword && values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Does not match password.'
    }
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.unc\.edu$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.password && !/^(?=.*\d).{4,15}$/.test(values.password)) {
        errors.password = 'Password must be between 4 and 15 digits long and include at least one numeric digit.'
    }
    return errors;
    // return hasErrors && errors;
}

// exports.required = value => value ? undefined : 'Required'
// exports.maxLength = maxLength
// exports.maxLength15 = maxLength(15)
// exports.number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// exports.minValue = minValue
// exports.minValue18 = minValue(18)
// exports.tooOld = value =>
//     value && value > 65 ? 'You might be too old for this' : undefined
// exports.aol = value =>
//     value && /.+@aol\.com/.test(value) ?
//         'Really? You still use AOL for your email?' : undefined

exports.renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
    // <div>
    //   <label>{label}</label>
    //   <div>
    //     <input id={idval} {...input} placeholder={label} type={type} value={value}/>
    //       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    //   </div>
    // </div>
)