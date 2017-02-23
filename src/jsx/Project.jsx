import React from 'react';
import { render } from 'react-dom';

import DevSignup from './DevSignup.jsx';
import DevSignupform from './DevSignupform.jsx';





class Project extends React.Component {
   constructor(props) {
    super(props);
   }

   render() {
      return (
          <div>
            <DevSignup>
              <DevSignupform></DevSignupform>
            </DevSignup>
          </div>
      );
   }
}


export default Project;
