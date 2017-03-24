{/*import React from 'react';*/}
{/*import '../css/bootstrap-theme.css';*/}
{/*import '../css/bootstrap.css';*/}
{/*import '../css/bootstrap.min.css';*/}
{/*import profile from '../img/profile.jpg';*/}
{/*var classNames = require('classnames');*/}
{/*const DevSidebarList = (props) => (*/}

    {/*<div>*/}
        {/*<li data-toggle="collapse" data-target={'#' + props.idname} aria-expanded="false" aria-controls={props.idname}>*/}
            {/*<a href={'#' + props.listname}>*/}
                {/*<i className={classNames('glyphicon','sideicon',props.styleclassName)}></i><span>{props.listname}</span>*/}
            {/*</a>*/}
        {/*</li>*/}
        {/*<div className="collapse" id={props.idname}>*/}
            {/*<ul>*/}
                {/*{*/}
                    {/*props.listitems.map((listitem)=>*/}
                        {/*<li><a href={"#" + listitem}>{listitem}</a></li>*/}
                    {/*)*/}
                {/*}*/}
            {/*</ul>*/}
        {/*</div>*/}

    {/*</div>*/}
{/*)*/}

{/*const DevSidebar = () => (*/}

    {/*<div className="sidebarStyle">*/}
        {/*<div className="sidebar-header">*/}
            {/*<div className="category-content">*/}
                {/*<div className="media">*/}
                    {/*<a className="media-left" href="#">*/}
                        {/*<img className="media-object" src={profile} alt="Generic placeholder image" />*/}
                    {/*</a>*/}
                    {/*<div className="media-body">*/}
                        {/*<h5 className="media-heading">Peter Wang</h5>*/}
                        {/*<i className="glyphicon glyphicon-map-marker"></i>*/}
                        {/*Durham, NC*/}
                    {/*</div>*/}
                    {/*<div className="media-right">*/}
                        {/*<a href="#">*/}
                            {/*<i className="glyphicon glyphicon-cog"></i>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
        {/*<ul className="sidebar-nav">*/}
            {/*<li className="sideheader">*/}
                {/*<span>MAIN</span>*/}
            {/*</li>*/}
            {/*<li className="sidebar-brand">*/}
                {/*<a href="#">*/}
                    {/*<i className="glyphicon glyphicon-dashboard sideicon"></i><span>DashBoard</span>*/}
                {/*</a>*/}
            {/*</li>*/}
            {/*<DevSidebarList listname="Requests" idname="requests" styleclassName="glyphicon-list-alt" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="Flash Dining" idname="flashdining" styleclassName="glyphicon-flash" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="Notifications" idname="notifications" styleclassName="glyphicon-exclamation-sign" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="Meal Friends" idname="mealfriends" styleclassName="glyphicon-sunglasses" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="Meal Groups" idname="mealgroups" styleclassName="glyphicon-tree-conifer" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="Memories" idname="memories" styleclassName="glyphicon-heart" listitems={['home','news','contact']}></DevSidebarList>*/}
            {/*<DevSidebarList listname="User Account" idname="useraccount" styleclassName="glyphicon-user" listitems={['home','news','contact']}></DevSidebarList>*/}

        {/*</ul>*/}

    {/*</div>*/}
{/*)*/}




{/*export default DevSidebar;*/}

import React from 'react';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import profile from '../img/profile.jpg';
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
        <div className="sidebar-header">
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
        </div>
        <ul className="sidebar-nav">
            <li className="sideheader">
                <span></span>
            </li>

            <DevSidebarList listname="Flash Dining" idname="flashdining" styleclassName="glyphicon-flash" listitems={['home','news','contact']}></DevSidebarList>
            <DevSidebarList listname="Meal Friends" idname="mealfriends" styleclassName="glyphicon-sunglasses" listitems={['home','news','contact']}></DevSidebarList>
            <DevSidebarList listname="Meal Groups" idname="mealgroups" styleclassName="glyphicon-tree-conifer" listitems={['home','news','contact']}></DevSidebarList>
            <DevSidebarList listname="Memories" idname="memories" styleclassName="glyphicon-heart" listitems={['home','news','contact']}></DevSidebarList>

        </ul>

    </div>
)




export default DevSidebar;