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

var Infinite = require('react-infinite');
var feedHeight;
// var page = 1;
var concat = false;
class DevBodyWall extends React.Component {
    constructor(props,context){
        super(props,context);
        var _this = this;
        this.state = {
            dvalue: '',
            svalue:'',
            date:null,
            time: null,
            lvalue:'',
            // isInfiniteLoading: _this.props.infinite.isInfiniteLoading,
            // infiniteLoadBeginEdgeOffset: _this.props.infinite.infiniteLoadBeginEdgeOffset,
            flag: _this.props.infinite.flag
            // page: _this.props.infinite.page
        };
        this.addRequest = this.addRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
        this.getPost = this.getPost.bind(this);
        this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
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
    };
    getPost() {
        if (!this.props.infinite.flag) return;
        var _this = this;
        axios.get(apihost + '/post/' + _this.props.infinite.page).then(function (response) {
            if(response.data.status === "fail") {
                _this.context.router.push('/');
            } else {
                console.log(_this.props.infinite.page);
                if(!response.data.err && response.data.length > 0) {

                    if(_this.props.infinite.page >= 2) concat = true;
                    _this.props.actions.getRequests(response.data.content,response.data.length,concat);
                    _this.props.actions.onInifinite();
                } else {
                    _this.props.actions.offInifinite();
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
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
    handleInfiniteLoad() {
        var that = this;
        that.getPost();

    };
    elementInfiniteLoad() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
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
                if(res.data.error) {
                    toastr.warning(res.data.error);
                }
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
        console.log(this.props.infinite)
        feedHeight = window.screen.height*.92;
        // feedHeight = 900;
        // console.log("what")
        if (this.props.requestsInfo.count !== 0) {
            DevReq = <DevRequest requestinfo={this.props.requestsInfo.mealrequests} count={this.props.requestsInfo.count}/>;
        }
        return (
            <Infinite  className="DevBodyGrids" containerHeight={feedHeight} elementHeight={212} onInfiniteLoad={this.handleInfiniteLoad} infiniteLoadBeginEdgeOffset={this.props.infinite.infiniteLoadBeginEdgeOffset} isInfiniteLoading={this.props.infinite.isInfiniteLoading} loadingSpinnerDelegate={this.elementInfiniteLoad()}>
                {DevReq}
                <DevModal dvalue={this.state.dvalue} date={this.state.date} time={this.state.time} lvalue={this.state.lvalue} showModal={this.props.showModal} onHide={this.close} onSubmit={this.addRequest} onDateChange={this.handleDate} onTimeChange={this.handleTime} onChange={this.handleChange}/>
            </Infinite>

        );
    }
}

DevBodyWall.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default DevBodyWall;
