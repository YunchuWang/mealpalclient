/**
 * Created by yunchu on 3/6/17.
 */
import { combineReducers } from 'redux'
import requesttoggle from './requesttoggle'
import useraccount from './useracount'
import mealrequests from './mealrequests'
import { reducer as formReducer } from 'redux-form'
import validate from '../components/validate'

const rootReducer = combineReducers({
    showModal: requesttoggle,
    userInfo: useraccount,
    requestsInfo: mealrequests,
    form: formReducer
})

export default rootReducer;
