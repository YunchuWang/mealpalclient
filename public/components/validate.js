/**
 * Created by yunchu on 3/25/17.
 */
import React from 'react';

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined

exports.validate = (values) => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

exports.email = (value) => {
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
}

exports.aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

exports.required = value => value ? undefined : 'Required'

exports.maxLength = maxLength
exports.maxLength15 = maxLength(15)
exports.number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
exports.minValue = minValue
exports.minValue18 = minValue(18)
exports.tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
exports.aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

exports.renderField = ({ input, label, type, value,handleChange,idval, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input id={idval} {...input} placeholder={label} type={type} value={value} onChange={handleChange}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)