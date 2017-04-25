import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../public/components/Project.jsx';
import DevMainPage from '../public/components/DevMainPage';
import DevMainContainer from '../public/containers/DevMainContainer';
import DevSignup from '../public/components/DevSignup.jsx';
import DevSigninContainer from '../public/containers/DevSigninContainer.jsx';
import DevSignUpContainer from '../public/containers/DevSignUpContainer.jsx';
import DevForgotPasswordContainer from '../public/containers/DevForgotPasswordContainer.jsx';
import MPprofile from '../public/components/profile/MPprofile';
import MPRequestContainer from '../public/components/requestview/MPRequestContainer';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../public/reducers/index';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReduxToastr from 'react-redux-toastr';

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
                <div>
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="top-left"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar/>
                    <Router history={hashHistory}>
                        <Route path="/" component={Project} />
                        <Route path="/DevMainPage" component={DevMainPage} />
                        <Route path="/DevMainContainer" component={DevMainContainer}>
                            <Route path="/MPprofile" component={MPprofile} />
                            <Route path="/MPRequestContainer" component={MPRequestContainer} />
                        </Route>
                        <Route path="/DevSignup" component={DevSignup}>
                            <Route path="/DevSignUpContainer" component={DevSignUpContainer} />
                            <Route path="/DevForgotPasswordContainer" component={DevForgotPasswordContainer} />
                            <Route path="/DevSigninContainer" component={DevSigninContainer} />
                        </Route>
                    </Router>

                </div>

            </Provider>
        </MuiThemeProvider>
    ), document.getElementById('app'));
