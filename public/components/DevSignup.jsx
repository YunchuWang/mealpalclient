import React,{PropTypes} from 'react';
import '../css/signup.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
// import DevSigninform from '../components/DevSigninform'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as Actions from '../actions'

const DevSignup = (props) => (
    <div className="signupstyle">
        <div className="body"></div>
        <div className="grad"></div>
        <div className="header">
            <div>Meal<span>Pal</span></div>
        </div>
        <br></br>
        {props.children}
    </div>

)

export default DevSignup;
