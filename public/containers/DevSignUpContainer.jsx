import React,{PropTypes} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import SignupLink from '../components/SignupLink.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import DevSignUpForm from '../components/DevSignUpForm';

var sha1 = require('sha1');


{/*<form className="login signup">*/}
    {/*<input type="text" placeholder="First name" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChange} required /><br></br>*/}
    {/*<input type="text" placeholder="Last name " name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleChange} required /><br></br>*/}
    {/*<input type="email" placeholder="Email" name="email" id="signemail" value={this.state.email} onChange={this.handleChange} required /><br></br>*/}
    {/*<input type="text" placeholder="Username" name="user" id="signid" value={this.state.userid} onChange={this.handleChange} required /><br></br>*/}
    {/*<input type="password" placeholder="Password" name="password" id="signpass" value={this.state.password} onChange={this.handleChange} required /><br></br>*/}
    {/*<input type="password" placeholder="Confirm your password" name="cpassword" id="signpasscon" value={this.state.password} onChange={this.handleChange} required /><br></br>*/}
    {/*<SignupLink handleSignup={this.signUp}>*/}
        {/*<input type="submit" value="Sign up" className="signupbutton" />*/}
    {/*</SignupLink>*/}
{/*</form>*/}




class DevSignUpContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userid: '',
            email: '',
            firstname: '',
            lastname: '',
            password:'',
            confirmpassword:''

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
            case 'firstname':
                this.setState({firstname: event.target.value});
                break;
            case 'lastname':
                this.setState({lastname: event.target.value});
                break;
            case 'signpasscon':
                this.setState({confirmpassword: event.target.value});
        }
        event.preventDefault();
    };
    signUp(event) {
        event.preventDefault();
        var email = this.state.email;
        var password = this.state.password;
        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        var userid = this.state.userid;

        //assign _this to point to DevSignuppage which has context
        var _this = this;
        axios.post(apihost + '/signup',{
            username: userid,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
        }).then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                //access DevSignuppage's context property to router
                _this.context.router.push('/DevMain');
            }
        }).catch(function (error) {
            console.log(error);
        });

        this.props.actions.signup(userid,password,email,firstname,lastname);
    }
    render() {

        return (
            <div>
                <DevSignUpForm handleSubmit={this.signUp} pristine={false}  submitting={false} emailvalue={this.state.email} password={this.state.password} passwordconfirm={this.state.confirmpassword} firstname={this.state.firstname} lastname={this.state.lastname} username={this.state.userid} handleChange={this.handleChange}></DevSignUpForm>
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
DevSignUpContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
DevSignUpContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(DevSignUpContainer);
