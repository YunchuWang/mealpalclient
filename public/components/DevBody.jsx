import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyWall from './DevBodyWall.jsx';

var devbodyStyle = {
    minWidth: '1020px',
    minHeight: '2952px',
    backgroundColor: '#F3FAB6',
    position:'absolute',
    top:'48px',
    bottom: '0px',
    right:'0px',
    color:"red",
    margin:"0px",
    padding:"0px",
    borderTop: "1px solid #C0C0C0"
};


const DevBody = (props) => (
    <div style={devbodyStyle}>
        <DevBodyMainNav {...props}></DevBodyMainNav>
        <DevBodySubNav></DevBodySubNav>
        <DevBodyWall {...props}></DevBodyWall>
    </div>
)


export default DevBody;
