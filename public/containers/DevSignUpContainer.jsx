import React,{PropTypes} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import DevSignUpForm from '../components/DevSignUpForm';
import {toastr} from 'react-redux-toastr';

var sha1 = require('sha1');
class DevSignUpContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userid: '',
            email: '',
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
            case 'signpasscon':
                this.setState({confirmpassword: event.target.value});
        }

    };
    signUp(values) {
        console.log(values);
        this.setState({email: values.email});
        this.setState({userid: values.username});
        this.setState({password: values.password});

        var email = values.email;
        var password = values.password;
        var userid = values.username;

        //assign _this to point to DevSignuppage which has context
        var _this = this;
        axios.post(apihost + '/signup',{
            username: userid,
            password: password,
            email: email
        }).then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                if(response.data.success) {
                    toastr.success(response.data.success);
                }
                _this.context.router.push('/DevMainPage');
            } else {
                if(response.data.error) {
                    toastr.error(response.data.error);
                }
            }
        }).catch(function (error) {
            console.log(error);
        });

        this.props.actions.signup(userid,password,email);
    }
    render() {

        return (
            <div>
                <DevSignUpForm onSubmit={this.signUp} emailvalue={this.state.email} password={this.state.password} passwordconfirm={this.state.confirmpassword}  username={this.state.userid}></DevSignUpForm>
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
