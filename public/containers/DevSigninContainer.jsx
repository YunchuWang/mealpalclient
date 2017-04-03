import React,{PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import DevSignInForm from '../components/DevSignInForm';
import {toastr} from 'react-redux-toastr';



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
        event.preventDefault();
        switch(event.target.id) {
            case 'loginemail':
                this.setState({email: event.target.value});
                console.log("asadlk");
                break;
            case 'loginpass':
                this.setState({password: event.target.value});
                break;
        }

    };
    logIn(values) {
        var _this = this;
        this.setState({email: values.email});
        this.setState({password: values.password});
        var email = values.email;
        var password = values.password;
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
        toastr.success('Test', 'Hello World')
        // alert("hello");
    }
    render() {
        return (
            <DevSignInForm mySubmit={this.logIn} emailvalue={this.state.email} password={this.state.password}></DevSignInForm>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo,
    form: state.form
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
DevSigninContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
DevSigninContainer.contextTypes = {
    router: React.PropTypes.object.isRequired

};


export default connect(mapStateToProps,mapDispatchToProps)(DevSigninContainer);
