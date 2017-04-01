import React from 'react';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import TimeAgo from 'react-timeago';

var timeagostyle = {
    color: '#808080'
}
class DevRequest extends React.Component {

    render() {
        var requests = this.props.requestinfo.map(function(request){
                var onerowrequests = request.map(
                    function(onerequest) {
                        return (
                            <div className="col-lg-4" key={onerequest.key}>
                                <div className="panel requestpanel">
                                    <div className="panel-heading requestheading">
                                        <span>
                                            <i className="glyphicon glyphicon-cutlery"></i>
                                            {onerequest.userid}
                                        </span>
                                        <span><TimeAgo style={timeagostyle} minPeriod="15" date={onerequest.key} /></span>
                                    </div>
                                    <div className="panel-body">
                                        <p>{onerequest.description}</p>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item requestitem">
                                            <i className="glyphicon glyphicon-record"></i>
                                            location: <span>{onerequest.location}</span>
                                        </li>
                                        <li className="list-group-item requestitem">
                                            <i className="glyphicon glyphicon-time"></i>avail time:<span>{onerequest.availtime}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        )

                    }

                );
                return (
                    <div className="row">
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
