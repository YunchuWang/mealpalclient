import React,{PropTypes} from 'react';
import DevNavbar from '../components/DevNavbar.jsx';
import DevSidebar from '../components/DevSidebar.jsx';
import DevBody from '../components/DevBody.jsx';
import '../css/style.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions'
import axios from 'axios';
import {apihost} from '../constants/global';

class DevMain extends React.Component {
    componentWillMount() {
        var _this = this;
        axios.get(apihost + '/login').then(function(response){
            if(response.data.status === "fail") {
                _this.context.router.push('/');
            } else {
                axios.get(apihost + '/post').then(function (response) {
                    console.log(response.locals);
                    if(response.data.status === "fail") {
                        _this.context.router.push('/');
                    } else {
                        _this.props.actions.getRequests(response.data.content,response.data.length);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }).catch(function (error) {
            console.log(error);
        });

    }
    logOut(event) {
        event.preventDefault();
        var _this = this;
        axios.get(apihost + '/logout').then(function (response) {
            console.log(response);
            if(response.data.status === "pass") {
                _this.context.router.push('/');
            }
        }).catch(function (error) {
            console.log(error);
        });
        this.props.actions.logout();
    };
    render() {
        return (
            <div id="DevMainstyle">
                <DevNavbar {...this.props} handleLogout={this.logOut.bind(this)}/>
                <DevSidebar {...this.props}/>
                <DevBody {...this.props} />
            </div>
        )
    }
}




const mapStateToProps = state => ({
    showModal: state.showModal,
    userInfo: state.userInfo,
    requestsInfo: state.requestsInfo
})

DevMain.propTypes = {
    showModal: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired,
    requestsInfo: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
DevMain.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(mapStateToProps,mapDispatchToProps)(DevMain);
