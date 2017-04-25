import React,{PropTypes} from 'react';
// import DevNavbar from '../components/DevNavbar.jsx';
import DevSidebar from './DevSidebar';
import DevBody from './DevBody';
import '../css/style.css';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as Actions from '../actions'
// import axios from 'axios';
// import {apihost} from '../constants/global';
import DevMainContainer from '../containers/DevMainContainer';
// import Pusher from 'pusher';
import Pusher from 'pusher-js';
import {toastr} from 'react-redux-toastr';
var pusher, channel1,channel2,channel3;
class DevMainPage extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <DevMainContainer>

                <DevSidebar />
                <DevBody />
            </DevMainContainer>


        )
    }
}





DevMainPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default DevMainPage;
