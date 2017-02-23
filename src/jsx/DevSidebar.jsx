import React from 'react';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import profile from '../img/profile.jpg';

class DevSidebar extends React.Component {

   render() {
      return (
          <div className="sidebarStyle">
              <div className="sidebar-header">
                  <div className="category-content">
                        <div className="media">
                          <a className="media-left" href="#">
                            <img className="media-object" src={profile} alt="Generic placeholder image" />
                          </a>
                          <div className="media-body">
                            <h5 className="media-heading">Peter Wang</h5>
                            <i className="glyphicon glyphicon-map-marker"></i>
                            Durham, NC
                          </div>
                          <div className="media-right">
                              <a href="#">
                                <i className="glyphicon glyphicon-cog"></i>
                              </a>
                          </div>
                        </div>
                  </div>
              </div>
              <ul className="sidebar-nav">
                  <li className="sideheader">
                    <span>MAIN</span>
                  </li>
                  <li className="sidebar-brand">
                    <a href="#">
                       <i className="glyphicon glyphicon-dashboard sideicon"></i><span>DashBoard</span>
                    </a>
                  </li>
                  <li>
                      <a href="#home">
                        <i className="glyphicon glyphicon-list-alt sideicon"></i><span>Requests</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-flash sideicon"></i><span>Flash Dining</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-exclamation-sign sideicon"></i><span>Notifications</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-apple sideicon"></i><span>Dining Spots</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-sunglasses sideicon"></i><span>Meal Friends</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-tree-conifer sideicon"></i><span>Meal Groups</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-heart sideicon"></i><span>Memories</span>
                      </a>
                  </li>
                  <li>
                      <a href="#news">
                        <i className="glyphicon glyphicon-user sideicon"></i><span>User Account</span>
                      </a>
                  </li>

                  <li className="sideheader">
                    <span>REQUESTS</span>
                  </li>
                  <li data-toggle="collapse" data-target="#test"><a href="#home">Home</a></li>
                  <ul className="collapse" id="test">
                      <li><a href="#news">...</a></li>
                      <li><a href="#contact">...</a></li>
                      <li><a href="#about">...</a></li>
                      <li><a href="#home">...</a></li>
                  </ul>
                  <li className="sideheader">
                    <span>DINING SPOTS</span>
                  </li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>

                  <li className="sideheader">
                    <span>MEAL PALS</span>
                  </li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>

                  <li className="sideheader">
                    <span>MEMORIES</span>
                  </li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>
                  <li><a href="#news">...</a></li>
                  <li><a href="#contact">...</a></li>
                  <li><a href="#about">...</a></li>
                  <li><a href="#home">...</a></li>
              </ul>

          </div>
      );
   }
}

export default DevSidebar;
