import React from 'react';
import { render } from 'react-dom';

import DevSignup from './DevSignup.jsx';
import DevSigninform from '../containers/DevSigninform.jsx';
import FieldLevelValidationForm from './FieldLevelValidationForm'




class Project extends React.Component {

    render() {
        return (
            <div>
                <DevSignup>
                    <DevSigninform submitting={false}></DevSigninform>
                </DevSignup>


            </div>
        )
    }
}



export default Project;
