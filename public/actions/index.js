/**
 * Created by yunchu on 3/6/17.
 */
import * as types from '../constants/ActionTypes'

export const showWriteRequest = () => ({ type: types.REQUEST_MODAL_SHOW })
export const hideWriteRequest = () => ({ type: types.REQUEST_MODAL_HIDE })
export const login = (username,password) => (
    { type: types.USER_LOGIN, username,password}
    )
export const signup = (username,password,email,hobbies,allergies,schoolyear) => ({ type: types.SIGN_UP, username,password,email,hobbies,allergies,schoolyear })
export const addRequest = (mealRequest) => ({ type: types.ADD_REQUEST,mealRequest })
export const deleteRequest = (reqId) => ({ type: types.DELETE_REQUEST,reqId })
