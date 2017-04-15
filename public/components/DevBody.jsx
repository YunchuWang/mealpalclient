import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyWall from './DevBodyWall.jsx';

var devbodyStyle = {
    width: '80%',
    height: '750px',
    backgroundColor: '#E9EBEE',
    marginTop: "150px",
    color:"red",
    marginLeft:"0",
    marginRight:"0",
    marginBottom:"0",
    position: "absolute",
    top: "0"
};


const DevBody = (props) => (
    <div style={devbodyStyle}>
        <DevBodyMainNav {...props}></DevBodyMainNav>
        <DevBodyWall {...props}></DevBodyWall>
    </div>
)


export default DevBody;
