/**
 * Created by yunchu on 3/6/17.
 */
import { NOTIFY_ON,NOTIFY_OFF  } from '../constants/ActionTypes'

export default function notifytoggle(state=false, action) {
    switch (action.type) {
        case NOTIFY_ON:
            return true;
        case NOTIFY_OFF:
            return false;
        default:
            return state;
    }
}
