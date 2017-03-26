import React,{PropTypes} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import NavLink from '../components/NavLink.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import { Field, reduxForm } from 'redux-form';
import DevSignInForm from '../components/DevSignInForm';

class DevSigninContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:this.props.userInfo.email,
            password: this.props.userInfo.password
        };
        this.handleChange = this.handleChange.bind(this);
        this.logIn = this.logIn.bind(this);
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
    logIn(event) {
        event.preventDefault();
        var _this = this;
        var email = this.state.email;
        var password = this.state.password;
        console.log(this.state.email);
        axios.post(apihost + '/login',{
            password: password,
            email: email
        }).then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                _this.context.router.push('/DevMain');
            }
        }).catch(function (error) {
            console.log(error);
        });
        this.props.actions.login(email,password);

    }
    render() {
        return (
            <div>
                <DevSignInForm handleSubmit={this.logIn} pristine={false}  submitting={false} emailvalue={this.state.email} password={this.state.password} handleChange={this.handleChange}></DevSignInForm>
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
DevSigninContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
DevSigninContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(DevSigninContainer);
