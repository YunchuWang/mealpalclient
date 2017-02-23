import React from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import axios from 'axios';
var sha1 = require('sha1');

class SignupLink extends React.Component {
   constructor(props, context) {
    super(props, context);
    this.state = {
      success: false,
      userid: 'asd',
      email: '',
      month:'',
      day:'',
      year:'',
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
       var hobbies = this.props.hobbies;
       var allergies = this.props.allergies;
       var schoolyear = this.props.schoolyear;
       var month = this.props.month;
       var day = this.props.day;
       var year = this.props.year;
       var userid = this.props.userid;
       console.log(this.props);
       axios.post('http://139.59.16.82:3000/register', {
            name: userid,
            email: email,
            day: day,
            month: month,
            year: year,
            schoolyear: schoolyear,
            allergies: allergies,
            hobbies: hobbies,
            password: password
          })
          .then(function(response) {
             console.log(response);
             this.setState({success:response.data.success});
             if(this.state.success === true) {
                 window.userid = userid;
                 window.hobbies = hobbies;
                 window.allergies = allergies;
                 console.log("from signup");
                 console.log(window.allergies);
                 window.schoolyear = schoolyear;
                 window.password = password;
                 window.month = month;
                 window.day = day;
                 window.year = year;
                 this.context.router.push('/');
             }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          }
      );
   }
   render() {
      return (
          <div onClick={this.handleClick}>
            {this.props.children}
          </div>
      );
   }
}

SignupLink.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default SignupLink;
