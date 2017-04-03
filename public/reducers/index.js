/**
 * Created by yunchu on 3/6/17.
 */
import { combineReducers } from 'redux'
import requesttoggle from './requesttoggle'
import useraccount from './useracount'
import mealrequests from './mealrequests'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
const rootReducer = combineReducers({
    showModal: requesttoggle,
    userInfo: useraccount,
    requestsInfo: mealrequests,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;
