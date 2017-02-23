import React from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import axios from 'axios';
var sha1 = require('sha1');
class NavLink extends React.Component {
   constructor(props, context) {
    super(props, context);
    this.state = {
      success: false,
      userid: '',
      hobbies:'',
      allergies:'',
      schoolyear: ''
    }
    this.handleClick = this.handleClick.bind(this);
   };
   handleClick(event) {
       event.preventDefault();
       var email = this.props.email;
       var password = sha1(this.props.password);

       axios.post('http://139.59.16.82:3000/login', {
            email: email,
            password: password
          })
          .then(function(response) {
             console.log(response);
             this.setState({success:response.data.success});
             if(this.state.success === true) {
                 window.userid = this.props.email;
                 window.session = response.data.session;
                 this.context.router.push('/DevMain');
             }
          }.bind(this))
          .catch(function (error) {
            console.log(error);

          }
      );
   }
   render() {
      return (
          //remove this line after adding backend
          <Link to="/DevMain">
              {this.props.children}
          </Link>
          // <div onClick={this.handleClick}>
          //   {this.props.children}
          // </div>
      );
   }
}
NavLink.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default NavLink;
