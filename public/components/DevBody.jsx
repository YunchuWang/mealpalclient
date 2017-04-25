import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyWall from './DevBodyWall.jsx';

var devbodyStyle = {
    width: '80%',
    height: '750px',
    backgroundColor: '#E9EBEE',
    color:"red",
    marginTop: "4vw",
    marginLeft:"20%",
    marginRight:"0",
    marginBottom:"0",
    position: "absolute",
    top: "0"
};


const DevBody = (props) => (
    <div style={devbodyStyle}>
        <DevBodyWall {...props}></DevBodyWall>
    </div>
)


export default DevBody;

// <DevBodyMainNav {...props}></DevBodyMainNav>