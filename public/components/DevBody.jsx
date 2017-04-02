import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyWall from './DevBodyWall.jsx';

var devbodyStyle = {
    width: '80%',
    height: '2000px',
    backgroundColor: '#F3FAB6',
    float:"right",
    color:"red",
    margin:"0px",
    padding:"0px",
    borderTop: "1px solid #C0C0C0"
};


const DevBody = (props) => (
    <div style={devbodyStyle}>
        <DevBodyMainNav {...props}></DevBodyMainNav>
        <DevBodyWall {...props}></DevBodyWall>
    </div>
)


export default DevBody;
