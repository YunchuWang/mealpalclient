import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../public/components/Project.jsx';
import DevMain from '../public/containers/DevMain.jsx';
import DevSignup from '../public/components/DevSignup.jsx';
import DevSigninContainer from '../public/containers/DevSigninContainer.jsx';
import DevSignUpContainer from '../public/containers/DevSignUpContainer.jsx';
import DevForgotPasswordContainer from '../public/containers/DevForgotPasswordContainer.jsx';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../public/reducers/index';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var thunkMiddleware = function ({ dispatch, getState }) {

    return function(next) {

        return function (action) {

            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)

let store = finalCreateStore(rootReducer)





ReactDOM.render((
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Project} />
                    <Route path="/DevMain" component={DevMain} />
                    <Route path="/DevSignup" component={DevSignup}>
                        <Route path="/DevSignUpContainer" component={DevSignUpContainer} />
                        <Route path="/DevForgotPasswordContainer" component={DevForgotPasswordContainer} />
                        <Route path="/DevSigninContainer" component={DevSigninContainer} />
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    )
    , document.getElementById('app'));
