

import React,{PropTypes} from 'react';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionAnnouncement from 'material-ui/svg-icons/action/announcement';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import profile from '../img/profile.jpg';

class DevNavbar extends React.Component {
    render() {
        return (
            <div className='navbarStyle navbar'>
                <ul className='navbar'>
                    <li className="navbar-title"><a href="#home">
                      <span className="glyphicon glyphicon-cutlery
appicon"></span>MealPal</a></li>
                    <li><a href="#collapse">
                        <span></span></a></li>
                    <li className="dropdown">
                        <a href="#Actions" aria-haspopup="true" aria-expanded="true"><span></span></a>

                    </li>

                    <div><span className="label label-success"></span></div>
                    <li className="dropdown"><a href="#Actions" className="btn " id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <Badge id="cookie2"
                               badgeContent={4}
                               primary={true}
                               badgeStyle={{top: 5, right: 8}}
                        > <NotificationsIcon /></Badge>
                    </a>
                        <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="messages">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </ul>
                    </li>

                    <li className="dropdown"><a href="#about" className="btn " id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <Badge id="cookie"
                               badgeContent={4}
                               primary={true}
                               badgeStyle={{top: 5, right: 8}}
                        > <ActionAnnouncement /></Badge>
                    </a>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="messages">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </ul>

                    </li>
                    <li className="dropdown">
                        <a href="#Actions" className="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src={profile} className="img-responsive" alt="Cinque Terre"></img><span>Peter</span></a>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#">My profile</a>
                            <a className="dropdown-item" href="#">Requests</a>
                            <a className="dropdown-item" href="#">Friends</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Account settings</a>
                            <a className="dropdown-item" href="#" onClick={this.props.handleLogout}>Log out</a>
                        </ul>
                    </li>
                </ul>

            </div>
        );
    }
}


DevNavbar.propTypes = {
    handleLogout : React.PropTypes.func.isRequired
}
export default DevNavbar;
