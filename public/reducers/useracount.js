/**
 * Created by yunchu on 3/7/17.
 */
import { SIGN_UP, USER_LOGIN, USER_LOGOUT } from '../constants/ActionTypes'
// import axios from 'axios';

const initialState =
    {
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        username: ''
    }


export default function requesttoggle(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return {
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                password: action.password,
                email: action.email
            };
        case USER_LOGIN:
            return {
                ...state,
                username: action.username,
                password: action.password
            };
        default:
            return initialState;
    }
}
