/**
 * Created by yunchu on 3/6/17.
 */
import { ON_INFINITE, OFF_INFINITE,START_INFINITE } from '../constants/ActionTypes'

export default function infinitetoggle(state = {isInfiniteLoading: true, flag:true, page: 1}, action) {
    switch (action.type) {
        case START_INFINITE:
            return {
                isInfiniteLoading: true,
                flag: true,
                page: 2
            };
        case ON_INFINITE:
            return {
                isInfiniteLoading: true,
                flag: true,
                page: state.page + 1
            };
        case OFF_INFINITE:
            return {
                isInfiniteLoading: false,
                flag: false,
                page: 1
            };
        default:
            return state;
    }
}
