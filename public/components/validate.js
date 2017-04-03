/**
 * Created by yunchu on 3/25/17.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

exports.validateLogIn = (values) => {
    const errors = {}
    const requiredFields = [ 'email','password' ]
    requiredFields.forEach(field => {
        if (!values[ field ] || values[field].trim() === '') {
            errors[ field ] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@([A-Z0-9.-]+\.)*unc\.edu$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.password && !/.{4,15}$/.test(values.password)) {
        errors.password = 'Enter 4-15 digits.'
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
        errors.username = '3-30 characters long. first is num or char. no special char.'
    }
    if (values.confirmpassword && values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Does not match password.'
    }
    if (values.email && !/^[A-Z0-9._%+-]+@([A-Z0-9.-]+\.)*unc\.edu$/i.test(values.email)) {
        errors.email = 'Invalid. Email needs to end with unc.edu'
    }
    if (values.password && !/.{4,15}$/.test(values.password)) {
        errors.password = 'Enter 4-15 digits.'
    }
    return errors;
    // return hasErrors && errors;
}

exports.renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error} errorStyle={{ position:"absolute", bottom:"-9px", fontSize:"10px"}}
               {...input}
               {...custom} autoComplete="aksldjlsakjdl"
    />
)
