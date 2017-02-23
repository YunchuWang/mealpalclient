import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import TimeAgo from 'react-timeago';

var timeagostyle = {
   color: '#808080'
}
class DevRequest extends React.Component {
   constructor(props){
        super(props);
    };
   render() {
      var requestarr = this.props.requestinfo;
      var requests = [];
      var temparr = [];
      for (var i = 0; i < requestarr.length; i++ ) {
          if(i % 3 === 0 && i !== 0) {
              requests.push(temparr);
              temparr = [];
          }
          temparr.push(requestarr[i]);
      }
      if(temparr.length !== 0) requests.push(temparr);
      requests = requests.map(function(request){
          var onerowrequests = request.map(
                  function(onerequest) {
                      return (
                          <div className="col-lg-4">
                                  <div className="panel requestpanel">
                                      <div className="panel-heading requestheading"><span><i className="glyphicon glyphicon-cutlery
                        "></i>{onerequest.userid}</span><span><TimeAgo style={timeagostyle} minPeriod="15" date={onerequest.key} /></span></div>
                                      <div className="panel-body">
                                        <p>{onerequest.description}</p>
                                      </div>
                                      <ul className="list-group">
                                        <li className="list-group-item requestitem"><i className="glyphicon glyphicon-record
                        "></i>location: <span>{onerequest.location}</span></li>
                                          <li className="list-group-item requestitem"><i className="glyphicon glyphicon-education
                        "></i>school year:<span>{onerequest.schoolyear}</span></li>
                                        <li className="list-group-item requestitem"><i className="glyphicon glyphicon-exclamation-sign
                        "></i>allergies:<span>{onerequest.allergy}</span></li>
                                          <li className="list-group-item requestitem"><i className="glyphicon glyphicon-time
                        "></i>avail time:<span>{onerequest.availtime}</span></li>
                                        <li className="list-group-item requestitem">
                                            <i className="glyphicon glyphicon-heart-empty"></i>hobbies:<span>{onerequest.hobby}</span></li>
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

export default DevRequest;
