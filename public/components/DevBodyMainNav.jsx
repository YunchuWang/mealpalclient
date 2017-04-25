import React from 'react';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';




const DevBodyMainNav = (props) =>
    (
        <div className="devbodymainnavStyle">
            <div className="heading-elements">
                <div className="heading-btn-group">
                    <button type="button" className="heading-button" onClick={props.actions.showWriteRequest}>
                        <ContentInbox/><span>Write</span>
                    </button>
                    <button id="draft" type="button" className="heading-button" onClick={props.actions.showInbox}>
                      <ContentDrafts/><span>Inbox</span></button>

                </div>
            </div>
        </div>
    )



export default DevBodyMainNav;
