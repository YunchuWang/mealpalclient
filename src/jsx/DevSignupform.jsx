import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import NavLink from './NavLink.jsx';

class DevSignupform extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
    };
   handleChange(event) {
      switch(event.target.id) {
           case 'loginemail':
               this.setState({email: event.target.value});
               break;
           case 'loginpass':
               this.setState({password: event.target.value});
               break;
      }
      event.preventDefault();
   };
   render() {
      return (
          <div>
              <form className="login" method="post">
                  <input id="loginemail" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required/><br></br>
                  <input id="loginpass" type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} required/><br></br>
                  <Link to="/DevSignuppage">
                  <input type="button" value="Get Started" className="signupbutton" />
                  </Link>
                  <NavLink linkname="/DevMain" email={this.state.email} password={this.state.password}>
                    <input type="button" value="Log In" className="loginbutton"/>
                  </NavLink>
              </form>
          </div>
      );
   }
}

export default DevSignupform;
