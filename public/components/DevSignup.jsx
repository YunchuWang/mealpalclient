import React,{PropTypes} from 'react';
import '../css/signup.css';


const DevSignup = (props) => (
    <div className="signupstyle">
        <div className="body"></div>
        <div className="grad"></div>
        <div className="header">
            <div>Meal<span>Pal</span></div>
        </div>
        <br></br>
        {props.children}
    </div>

)

export default DevSignup;
