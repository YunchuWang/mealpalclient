import React from 'react';
import '../css/signup.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


class DevSignup extends React.Component {
   render() {
      return (

          <div className="signupstyle">
              <div className="body"></div>
              <div className="grad"></div>
              <div className="header">
                  <div>Meal<span>Pal</span></div>
              </div>
              <br></br>
              {this.props.children}
          </div>
      );
   }
}

export default DevSignup;
