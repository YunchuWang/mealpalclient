import React from 'react';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import profile from '../img/profile.jpg';

import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentWeekend from 'material-ui/svg-icons/content/weekend';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import SocialSentimentVerySatisfiedIcon from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SocialGroup from 'material-ui/svg-icons/social/group';


import {CardActions} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

var classNames = require('classnames');
const location = <div className="secondarytext"><i className="glyphicon glyphicon-map-marker secondaryicon"></i>
                            Durham, NC</div>
// const DevSidebarList = (props) => (
//
//     <div>
//         <li data-toggle="collapse" data-target={'#' + props.idname} aria-expanded="false" aria-controls={props.idname}>
//             <a href={'#' + props.listname}>
//                 <i className={classNames('glyphicon','sideicon',props.styleclassName)}></i><span>{props.listname}</span>
//             </a>
//         </li>
//         <div className="collapse" id={props.idname}>
//             <ul>
//                 {
//                     props.listitems.map((listitem)=>
//                         <li><a href={"#" + listitem}>{listitem}</a></li>
//                     )
//                 }
//             </ul>
//         </div>
//
//     </div>
// )

const DevSidebar = () => (

    <div className="sidebarStyle">
        <List>
            <ListItem className="category-content"
                      primaryText="Peter Wang"
                      secondaryText={location}
                      leftAvatar={<Avatar src={profile} />}
                      rightIcon={<ActionSettings className="right"/>}
            />
            <Divider />
            <ListItem primaryText="Flash Dining" leftIcon={<MapsRestaurant />} />
            <ListItem primaryText="Meal Friends" leftIcon={<SocialSentimentVerySatisfiedIcon />} />
            <ListItem primaryText="Meal Groups" leftIcon={<SocialGroup />} />
            <ListItem primaryText="Memories" leftIcon={<ActionFavorite />} />
            <ListItem primaryText=""    />
            <ListItem primaryText=""  />
            <ListItem primaryText="" />
            <ListItem primaryText=""   />
            <ListItem primaryText=""   />
            <ListItem primaryText="" />
            <ListItem primaryText=""  />
            <ListItem primaryText=""   />
            <ListItem primaryText=""    />
            <ListItem primaryText=""  />
            <ListItem primaryText="" />
            <ListItem primaryText=""  />
            <ListItem primaryText=""   />
            <ListItem primaryText=""  />
            <ListItem primaryText="" />
            <ListItem primaryText=""   />
            <ListItem primaryText=""   />
            <ListItem primaryText=""  />
            <ListItem primaryText="" />
            <ListItem primaryText=""   />
        </List>

    </div>


)



// <div className="media-body" >
//
//
//
//
//                     </div>

export default DevSidebar;
