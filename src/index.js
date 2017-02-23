import React from 'react';
import ReactDOM from 'react-dom';
import Project from './jsx/Project.jsx';
import DevMain from './jsx/DevMain.jsx';
import DevSignup from './jsx/DevSignup.jsx';
import DevSignupform from './jsx/DevSignupform.jsx';
import DevSignuppage from './jsx/DevSignuppage.jsx';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Project} />
        <Route path="/DevMain" component={DevMain} />
        <Route path="/DevSignup" component={DevSignup}>
            <Route path="/DevSignuppage" component={DevSignuppage} />
            <Route path="/DevSignupform" component={DevSignupform} />
        </Route>
    </Router>
    )
    , document.getElementById('app'));
