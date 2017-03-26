import React from 'react';
import { render } from 'react-dom';

import DevSignup from './DevSignup.jsx';
import DevSigninContainer from '../containers/DevSigninContainer.jsx';




class Project extends React.Component {

    render() {
        return (
            <div>
                <DevSignup>
                    <DevSigninContainer submitting={false}></DevSigninContainer>
                </DevSignup>


            </div>
        )
    }
}



export default Project;
