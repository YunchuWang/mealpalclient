import React,{PropTypes} from 'react';
import DevNavbar from '../components/DevNavbar.jsx';
import DevSidebar from '../components/DevSidebar.jsx';
import DevBody from '../components/DevBody.jsx';
import '../css/style.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions'
// import axios from 'axios';


class DevMain extends React.Component {
    logOut(event) {
        event.preventDefault();
        // axios.post('http://139.59.16.82:3000/logout', {
        //     token: window.session
        // })
        //     .then(function(response) {
        //         console.log(response);
        //         this.setState({success:response.data.success});
        //         if(this.state.success === true) {
        //             this.context.router.push('/');
        //         }
        //         console.log(window);
        //     }.bind(this))
        //     .catch(function (error) {
        //             console.log(error);
        //         }
        //     );
        this.context.router.push('/');
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
