import React from 'react';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import TimeAgo from 'react-timeago';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
var timeagostyle = {
    color: '#808080',
    float: "right",
    marginRight: "0"
}

const listitemstyle = {
    margin:"0",
    padding: "0"
}
class DevRequest extends React.Component {
    render() {
        var requests = this.props.requestinfo.map(function(request){
                var onerowrequests = request.map(
                    function(onerequest) {
                        return (
                            <div className="col-md-4" key={onerequest.key}>
                                <Card>
                                    <CardActions>
                                        <i className="glyphicon glyphicon-cutlery"></i>
                                            {onerequest.userid}

                                        <TimeAgo style={timeagostyle} minPeriod="15" date={onerequest.key} />
                                    </CardActions>
                                    <Divider />
                                    <CardText>
                                        {onerequest.description}
                                    </CardText>
                                    <Divider />
                                    <CardActions>
                                        <i className="glyphicon glyphicon-record"></i>
                                        location: <span>{onerequest.location}</span>
                                    </CardActions>
                                    <Divider />
                                    <CardActions>
                                        <i className="glyphicon glyphicon-time"></i>avail time:<span>{onerequest.availtime}</span>
                                    </CardActions>

                                </Card>
                            </div>
                        )
                    }
                );
                return (
                    <div className="row onerowrequest">
                        {onerowrequests}
                    </div>
                );
            }
        );
        return (
            <div>
                {requests}
            </div>
        );
    }
}

DevRequest.propTypes = {
    requestinfo: React.PropTypes.array,
    count: React.PropTypes.number
};
export default DevRequest;
