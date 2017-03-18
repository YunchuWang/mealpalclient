import React,{PropTypes} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import SignupLink from '../components/SignupLink.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';

var sha1 = require('sha1');

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
        this.signUp = this.signUp.bind(this);
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
    signUp(event) {
        event.preventDefault();
        var email = this.state.email;
        var password = this.state.password;
        var hobbies = this.state.hobbies;
        var allergies = this.state.allergies;
        var schoolyear = this.state.schoolyear;
        var userid = this.state.userid;

        //assign _this to point to DevSignuppage which has context
        var _this = this;
        axios.post('http://localhost:3002/signup',{
            username: userid,
            password: password,
            email: email,
            hobbies: hobbies,
            allergies:allergies,
            schoolyear:schoolyear
        }).then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                //access DevSignuppage's context property to router
                _this.context.router.push('/DevMain');
            }
        }).catch(function (error) {
            console.log(error);
        });

        this.props.actions.signup(userid,password,email,hobbies,allergies,schoolyear);
    }
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
                    {/*<SignupLink userid={this.state.userid} email={this.state.email} password={this.state.password} hobbies={this.state.hobbies} allergies={this.state.allergies} schoolyear={this.state.schoolyear} month="10" day="10" year="1993" actions={this.props.actions}>*/}
                    {/*<input type="submit" value="Sign up" className="signupbutton" />*/}
                    {/*</SignupLink>*/}
                    <SignupLink handleSignup={this.signUp}>
                        <input type="submit" value="Sign up" className="signupbutton" />
                    </SignupLink>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
DevSignuppage.propTypes = {
    userInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
DevSignuppage.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(DevSignuppage);
