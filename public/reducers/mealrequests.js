/**
 * Created by yunchu on 3/10/17.
 */
import { ADD_REQUEST, DELETE_REQUEST } from '../constants/ActionTypes'
import axios from 'axios';



export default function mealrequests(state = {count:0,mealrequests:[]}, action) {
    switch (action.type) {
        case ADD_REQUEST:
            // var jsoned = JSON.stringify(action.mealRequest);
            // axios.post('http://139.59.16.82:3000/create',jsoned)
            //     .then(function(response) {
            //        console.log(response.data.success);
            //     }.bind(this))
            //     .catch(function (error) {
            //     }
            // );
            if(state.count !== 0  && state.mealrequests[0].length < 3) {
                state.mealrequests[0].unshift(
                    action.mealRequest
                );
            } else {
                var newarr = [];
                newarr.push(
                    action.mealRequest
                );
                state.mealrequests.unshift(newarr);
                var requests = [];
                var counter = 0;
                newarr = [];
                for (var row = 0; row < state.mealrequests.length; row++) {
                    for (var col = 0; col < state.mealrequests[row].length; col++) {
                        counter = counter + 1;
                        newarr.push(state.mealrequests[row][col]);
                        if(counter % 3 === 0 && counter !== 0) {
                            requests.push(newarr);
                            newarr = [];
                        }
                    }
                }

                if(newarr.length > 0) requests.push(newarr);
                return {count:state.count + 1, mealrequests: [...requests]};
            }
            return {count:state.count + 1, mealrequests: [...state.mealrequests]};
        case DELETE_REQUEST:
            return {

            };
        default:
            return state;
    }
}
