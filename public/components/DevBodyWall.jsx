import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/bootstrap-theme.css";
import "../css/bootstrap-theme.min.css";
import DevRequest from "./DevRequest.jsx";
import DevModal from './DevModal'
import axios from 'axios';
import {apihost} from '../constants/global';
import moment from 'moment';
import {toastr} from 'react-redux-toastr';

class DevBodyWall extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            dvalue: '',
            svalue:'',
            date:null,
            time: null,
            lvalue:''
        };
        this.addRequest = this.addRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    };
    handleDate(event,date) {
        this.setState({date: date});
    };

    handleTime(event,time) {
        this.setState({time: time});
    };
    close() {
        this.props.actions.hideWriteRequest();
    };

    open() {
        this.props.actions.showWriteRequest();
        toastr.success('Test', 'Hello World');
    };

    handleChange(event) {
        switch(event.target.id) {
            case 'location':
                this.setState({lvalue: event.target.value});
                break;
            case 'description':
                this.setState({dvalue: event.target.value});
                break;
        }
    };
    addRequest(e) {

        let momentTime = moment(this.state.time);
        let momentDate = moment(this.state.date);
        let renderedDateTime = moment({
            year: momentDate.year(),
            month: momentDate.month(),
            day: momentDate.date(),
            hour: momentTime.hours(),
            minute: momentTime.minutes()
        });
        const newrequest = {
            key: Date(),
            description: this.state.dvalue,
            availtime: renderedDateTime,
            location: this.state.lvalue
        }
        var _this = this;
        //refresh feed after adding new post
        axios.post(apihost + '/post', newrequest).then(function(res){
            if(res.data.status === 'fail') {
                _this.context.router.push('/');
            } else {
            }
        }).catch(function (error) {
            console.log(error);
        });

        this.setState ({
            dvalue: '',
            date:null,
            time: null,
            lvalue:''
        }) ;
        e.preventDefault();
        this.props.actions.hideWriteRequest();
    };

    render() {
        var DevReq =  <div></div>;
        if (this.props.requestsInfo.count !== 0) {
            DevReq = <DevRequest requestinfo={this.props.requestsInfo.mealrequests} count={this.props.requestsInfo.count}/>;
        }
        return (
            <div className="DevBodyGrids">
                {DevReq}
                <DevModal dvalue={this.state.dvalue} date={this.state.date} time={this.state.time} lvalue={this.state.lvalue} showModal={this.props.showModal} onHide={this.close} onSubmit={this.addRequest} onDateChange={this.handleDate} onTimeChange={this.handleTime} onChange={this.handleChange}/>
            </div>

        );
    }
}

DevBodyWall.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default DevBodyWall;
