/**
 * Created by yunchu on 3/10/17.
 */
import { ADD_REQUEST, DELETE_REQUEST } from '../constants/ActionTypes'
import axios from 'axios';
import {apihost} from '../constants/global';
// var fetch = require('node-fetch');
axios.defaults.withCredentials = true;



// fetch(apihost + '/post')
//     .then(function(res) {
//         return res.text();
//     }).then(function(body) {
//         console.log(body);
//     });

export default function mealrequests(state = {count:0,mealrequests:[]}, action) {
    switch (action.type) {
        case ADD_REQUEST:
            axios.get(apihost + '/post').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            axios.post(apihost + '/post',action.mealRequest).then(function(res){
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
            // axios.post('https://onyen.unc.edu/cgi-bin/unc_id/authenticator.pl').then(function(res){
            //     console.log(res);
            // }).catch(function (error) {
            //     console.log(error);
            // });
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
