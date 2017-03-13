/**
 * Created by yunchu on 3/6/17.
 */
import { combineReducers } from 'redux'
import requesttoggle from './requesttoggle'
import useraccount from './useracount'
import mealrequests from './mealrequests'

const rootReducer = combineReducers({
    showModal: requesttoggle,
    userInfo: useraccount,
    requestsInfo: mealrequests
})

export default rootReducer
