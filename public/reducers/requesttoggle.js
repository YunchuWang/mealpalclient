/**
 * Created by yunchu on 3/6/17.
 */
import { REQUEST_MODAL_SHOW, REQUEST_MODAL_HIDE } from '../constants/ActionTypes'

export default function requesttoggle(initialstate = false, action) {
    switch (action.type) {
        case REQUEST_MODAL_SHOW:
            return true;
        case REQUEST_MODAL_HIDE:
            return false;
        default:
            return initialstate;
    }
}
