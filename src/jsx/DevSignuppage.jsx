import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import SignupLink from './SignupLink.jsx';

class DevSignuppage extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            userid: '',
            email: '',
            password:'',
            hobbies:'',
            allergies:'',
            schoolyear:''
        };
        this.handleChange = this.handleChange.bind(this);
    };
   handleChange(event) {
      switch(event.target.id) {
           case 'signid':
               this.setState({userid: event.target.value});
               break;
           case 'signemail':
               this.setState({email: event.target.value});
               break;
           case 'signpass':
               this.setState({password: event.target.value});
               break;
           case 'signhobby':
               this.setState({hobbies: event.target.value});
               break;
           case 'signallergy':
               this.setState({allergies: event.target.value});
               break;
           case 'signyear':
               this.setState({schoolyear: event.target.value});
               break;
      }
      event.preventDefault();
   };
   render() {
      return (
          <div>
              <form className="login signup">
                  <input type="text" placeholder="Username" name="user" id="signid" value={this.state.userid} onChange={this.handleChange} required /><br></br>
                  <input type="email" placeholder="Email" name="email" id="signemail" value={this.state.email} onChange={this.handleChange} required /><br></br>
                  <input type="password" placeholder="Password" name="password" id="signpass" value={this.state.password} onChange={this.handleChange} required /><br></br>
                  <input type="text" placeholder="Hobbies" name="hobbies" id="signhobby" value={this.state.hobbies} onChange={this.handleChange} required /><br></br>
                  <input type="text" placeholder="Allergies" name="allergies" id="signallergy" value={this.state.allergies} onChange={this.handleChange} required /><br></br>
                  <input type="text" placeholder="Schoolyear" name="schoolyear" id="signyear" value={this.state.schoolyear} onChange={this.handleChange} required /><br></br>
                  <SignupLink userid={this.state.userid} email={this.state.email} password={this.state.password} hobbies={this.state.hobbies} allergies={this.state.allergies} schoolyear={this.state.schoolyear} month="10" day="10" year="1993" >
                  <input type="submit" value="Sign up" className="signupbutton" />
                  </SignupLink>
              </form>
          </div>
      );
   }
}

export default DevSignuppage;
