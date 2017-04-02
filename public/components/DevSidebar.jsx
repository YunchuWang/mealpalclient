import React from 'react';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import profile from '../img/profile.jpg';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';


var classNames = require('classnames');
const DevSidebarList = (props) => (

    <div>
        <li data-toggle="collapse" data-target={'#' + props.idname} aria-expanded="false" aria-controls={props.idname}>
            <a href={'#' + props.listname}>
                <i className={classNames('glyphicon','sideicon',props.styleclassName)}></i><span>{props.listname}</span>
            </a>
        </li>
        <div className="collapse" id={props.idname}>
            <ul>
                {
                    props.listitems.map((listitem)=>
                        <li><a href={"#" + listitem}>{listitem}</a></li>
                    )
                }
            </ul>
        </div>

    </div>
)

const DevSidebar = () => (

    <div className="sidebarStyle">

                <List className="sidebar-nav">

                        <ListItem className="collection-item avatar">
                            <div className="category-content">
                                <div className="media">
                                    <a className="media-left" href="#">
                                        <img className="media-object" src={profile} alt="Generic placeholder image" />
                                    </a>
                                    <div className="media-body" >
                                        <h5 className="media-heading" id= "black">Peter Wang</h5>
                                        <i className="glyphicon glyphicon-map-marker"></i>
                                        Durham, NC
                                    </div>
                                    <div className="media-right">
                                        <a href="#">
                                            <i className="glyphicon glyphicon-cog"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem primaryText="Flash Dining"  idname="flashdining" leftIcon={<ContentInbox />} />
                        <ListItem primaryText="Meal Friends" idname="mealfriends" leftIcon={<ActionGrade />} />
                        <ListItem primaryText="Meal Groups" idname="mealgroups" leftIcon={<ContentSend />} />
                        <ListItem primaryText="Memories" idname="memories" leftIcon={<ContentDrafts />} />

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




export default DevSidebar;
