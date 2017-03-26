import React,{PropTypes} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import DevSignUpForm from '../components/DevSignUpForm';

var sha1 = require('sha1');
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
        event.preventDefault();
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
                <DevSignUpForm onSubmit={this.signUp} emailvalue={this.state.email} password={this.state.password} passwordconfirm={this.state.confirmpassword} firstname={this.state.firstname} lastname={this.state.lastname} username={this.state.userid} handleChange={this.handleChange}></DevSignUpForm>
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
