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


                <DevSignup>
                    <Tabs className="tabs"
                    >
                        <Tab label="Log In" value="login" buttonStyle={logintabstyle} inkBarStyle={{backgroundColor:"#FFC107", zIndex:4,color:'rgba(255, 255, 255, 0)'}}>
                            <DevSigninContainer></DevSigninContainer>
                        </Tab>
                        <Tab label="Sign Up" value="signup" buttonStyle={signuptabstyle} inkBarStyle={{backgroundColor:"#FFC107", zIndex:4,color:'rgba(255, 255, 255, 0)'}}>
                            <DevSignUpContainer></DevSignUpContainer>
                        </Tab>
                    </Tabs>
                </DevSignup>

        )
    }
}



export default Project;
