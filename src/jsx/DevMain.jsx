import React from 'react';
import DevNavbar from './DevNavbar.jsx';
import DevSidebar from './DevSidebar.jsx';
import DevBody from './DevBody.jsx';
import '../css/style.css';


class DevMain extends React.Component {
   render() {
      return (

          <div id="DevMainstyle">
              <DevNavbar/>
              <DevSidebar/>
              <DevBody>
              </DevBody>

          </div>
      );
   }
}

export default DevMain;
