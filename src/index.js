import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../public/components/Project.jsx';
import DevMain from '../public/containers/DevMain.jsx';
import DevSignup from '../public/components/DevSignup.jsx';
import DevSigninContainer from '../public/containers/DevSigninContainer.jsx';
import DevSignUpContainer from '../public/containers/DevSignUpContainer.jsx';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../public/reducers/index';
// import * as ActionTypes from '../public/constants/ActionTypes';
import {Provider} from 'react-redux';

var thunkMiddleware = function ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            // console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)

let store = finalCreateStore(rootReducer)

//
// store.dispatch({
//     type : ActionTypes.USER_LOGIN,
//     username: 'asd',
//     password: 'nininini'
// })
// setInterval(()=>{
//     console.log(store.getState());
// },10000)




ReactDOM.render((
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Project} />
                <Route path="/DevMain" component={DevMain} />
                <Route path="/DevSignup" component={DevSignup}>
                    <Route path="/DevSignUpContainer" component={DevSignUpContainer} />
                    <Route path="/DevSigninContainer" component={DevSigninContainer} />
                </Route>
            </Router>
        </Provider>

    )
    , document.getElementById('app'));
