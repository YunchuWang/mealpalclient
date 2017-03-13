import React from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import axios from 'axios';


class SignupLink extends React.Component {

    render() {
        return (
            <div onClick={this.props.handleSignup}>
                {this.props.children}
            </div>
        );
    }
}


export default SignupLink;
