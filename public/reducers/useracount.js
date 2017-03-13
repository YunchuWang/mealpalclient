/**
 * Created by yunchu on 3/7/17.
 */
import { SIGN_UP, USER_LOGIN } from '../constants/ActionTypes'

const initialState =
    {
        username: '',
        password: '',
        email: '',
        hobbies:'',
        allergies:'',
        schoolyear:''
    }


export default function requesttoggle(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return {
                username: action.username,
                password: action.password,
                email: action.email,
                hobbies: action.hobbies,
                allergies:action.allergies,
                schoolyear:action.schoolyear
            };
        case USER_LOGIN:
            return {
                     ...state,
                     username: action.username,
                     password: action.password,
            };
        default:
            return initialState;
    }
}
