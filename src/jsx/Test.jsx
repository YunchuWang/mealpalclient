import React from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

var testStyle = {

  backgroundColor: '#F5F5F5',
  position:'absolute',
  //top:'0',
  top:'48px',
  bottom: '0px',
  right:'0px',
  color:"red",
  margin:"0px",
  padding:"0px",
  borderTop: "1px solid #C0C0C0"
};

class Test extends React.Component {
    
  
   render() {
      return (
          <div style={testStyle}>
             Hello World1!
          </div>
      );
   }
}

export default Test;
