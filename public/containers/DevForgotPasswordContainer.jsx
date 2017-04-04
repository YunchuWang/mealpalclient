import React,{PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import axios from 'axios';
import {apihost} from '../constants/global';
import DevForgotPasswordForm from '../components/DevForgotPasswordForm';
import {toastr} from 'react-redux-toastr';

class DevForgotPasswordContainer extends React.Component {
    constructor(props){
        super(props);
        this.sendForgot = this.sendForgot.bind(this);
    };

    sendForgot(values) {
        var _this = this;
        var email = values.email;
        axios.post(apihost + '/forgot',{
            email: email
        }).then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                if(response.data.success) {
                    toastr.success(response.data.success);
                }
                _this.context.router.push('/');
            } else {
                if(response.data.error) {
                    toastr.error(response.data.error);
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <DevForgotPasswordForm mySubmit={this.sendForgot}></DevForgotPasswordForm>
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
DevForgotPasswordContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
DevForgotPasswordContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(DevForgotPasswordContainer);
