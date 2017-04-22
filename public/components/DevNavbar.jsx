

import React,{PropTypes} from 'react';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CommunicationStayCurrentPortraitIcon from 'material-ui/svg-icons/communication/stay-current-portrait';
import axios from 'axios';
import {apihost} from '../constants/global';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import profile from '../img/profile.jpg';
import { goToAnchor } from 'react-scrollable-anchor';

const iconstyle = {
    height: "70%",
    width: "100%",
    paddingTop: "6px",
    paddingBottom: "6px"

};

const homestyle = {
    backgroundColor: "#E37222",
    height: "70%",
    width: "100%",
    paddingTop: "6px",
    paddingBottom: "6px"
};

var concat = false;

class DevNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.getPost = this.getPost.bind(this);
    };
    getPost() {
        var _this = this;
        axios.get(apihost + '/post/' + 1).then(function (response) {
            if(response.data.status === "fail") {
                _this.context.router.push('/');
            } else {
                if(!response.data.err && response.data.length > 0) {
                    _this.props.actions.startInifnite();
                    _this.props.actions.getRequests(response.data.content,response.data.length,concat);
                    _this.props.actions.offNotify();
                    var relement = document.getElementById("rinifi");
                    relement.scrollTop = 0;
                    window.scrollBy(0, -175);
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    render() {
        return (
            <div className='navbarStyle'>
                <div className="navitem navicon"><a href="#">
                      <span className="glyphicon glyphicon-cutlery
appicon navlefticon"></span><span>MealPal</span></a>
                </div>
                <div><span className="label label-success"></span></div>
                <div className="navitem homeicon">
                    <HomeIcon style={this.props.notify? homestyle: iconstyle} color="white" className="homeiconstyle" onClick={this.getPost}/>
                </div>

                <div className="navitem comicon" >
                    <CommunicationStayCurrentPortraitIcon style={iconstyle} color="white" className="comiconstyle"/>
                </div>
                <div className="navitem profileicon">
                    <a href="#Actions" className="btn" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src={profile} className="navimage" alt="Cinque Terre"></img></a>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                        <Link className="dropdown-item" to="/MPprofile">My profile</Link>
                        <a className="dropdown-item" href="#">Requests</a>
                        <a className="dropdown-item" href="#">Friends</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Account settings</a>
                        <a className="dropdown-item" href="#" onClick={this.props.handleLogout}>Log out</a>
                    </ul>
                </div>
            </div>
        );
    }
}


DevNavbar.propTypes = {
    handleLogout : React.PropTypes.func.isRequired
}
export default DevNavbar;
