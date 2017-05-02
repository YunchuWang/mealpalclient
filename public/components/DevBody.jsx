import React from 'react';
import DevBodyWall from './DevBodyWall.jsx';
// import DevBodyMainNav from './DevBodyMainNav';
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