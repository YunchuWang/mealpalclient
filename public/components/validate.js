/**
 * Created by yunchu on 3/25/17.
 */


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
