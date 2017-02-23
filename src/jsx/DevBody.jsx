import React from 'react';
import DevBodyMainNav from './DevBodyMainNav.jsx';
import DevBodySubNav from './DevBodySubNav.jsx';
import DevBodyGrids from './DevBodyGrids.jsx';

var devbodyStyle = {
    minWidth: '1020px',
    minHeight: '2952px',
    backgroundColor: '#F5F5F5',
    position:'absolute',
    top:'48px',
    bottom: '0px',
    right:'0px',
    color:"red",
    margin:"0px",
    padding:"0px",
    borderTop: "1px solid #C0C0C0"
};



class DevBody extends React.Component {

    render() {
        return (
            <div style={devbodyStyle}>
                <DevBodyMainNav ></DevBodyMainNav>
                <DevBodySubNav></DevBodySubNav>
                <DevBodyGrids ></DevBodyGrids>
            </div>
        );
    }
}

export default DevBody;
