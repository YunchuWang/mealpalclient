/**
 * Created by yunchu on 3/10/17.
 */
import { ADD_REQUEST, DELETE_REQUEST,GET_REQUESTS } from '../constants/ActionTypes'
import axios from 'axios';
import {apihost} from '../constants/global';
axios.defaults.withCredentials = true;



//async action
export default function mealrequests(state = {count:0,mealrequests:[]}, action) {
    switch (action.type) {
        case ADD_REQUEST:
            return state;
        case DELETE_REQUEST:
            return {
            };
        case GET_REQUESTS:
            return {count: action.length , mealrequests: action.content};
        default:
            return state;
    }
}
