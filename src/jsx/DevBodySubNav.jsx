import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';

class DevBodySubNav extends React.Component {
   render() {
      return (
          <div className="DevBodySubNav">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><i className="glyphicon-home glyphicon"></i>Home</li>
                  <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <ol className="breadcrumb-elements">
                  <li><a href="#home"><i className="glyphicon-blackboard glyphicon"></i><span>Support</span></a></li>
                  <li className="dropdown">
                    <a href="#Actions" className="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="glyphicon-certificate glyphicon"></i><span>Settings</span></a>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Separated link</a>
                    </ul>
                  </li>
              </ol>
          </div>
      );
   }
}

export default DevBodySubNav;
