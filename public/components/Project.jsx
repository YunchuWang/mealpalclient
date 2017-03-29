import React from 'react';
import { render } from 'react-dom';

import DevSignup from './DevSignup.jsx';
import DevSigninContainer from '../containers/DevSigninContainer.jsx';
import DevSignUpContainer from '../containers/DevSignUpContainer.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';

const logintabstyle = {
    backgroundColor:"#ff5700"
}
const signuptabstyle = {
    backgroundColor:"#25D366"
}
class Project extends React.Component {

    render() {
        return (
            <div>
                <DevSignup>
                    <DevSigninContainer></DevSigninContainer>
                </DevSignup>
            </div>


        )
    }
}



export default Project;
