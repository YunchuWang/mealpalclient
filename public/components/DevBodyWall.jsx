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
var page = 1;
var flag = true;
var concat = false;
class DevBodyWall extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            dvalue: '',
            svalue:'',
            date:null,
            time: null,
            lvalue:'',
            isInfiniteLoading: false,
            infiniteLoadBeginEdgeOffset: 0
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
        if (!flag) return;
        var _this = this;
        axios.get(apihost + '/post/' + page).then(function (response) {
            if(response.data.status === "fail") {
                _this.context.router.push('/');
            } else {
                console.log(response.data.length);
                if(!response.data.err && response.data.length > 0) {
                    page = page + 1;
                    if(page > 2) concat = true;
                    _this.props.actions.getRequests(response.data.content,response.data.length,concat);
                    flag = true;
                    _this.setState({
                        isInfiniteLoading: false
                    });
                } else {
                    flag = false;
                    _this.setState({
                        isInfiniteLoading: true,
                        infiniteLoadBeginEdgeOffset: undefined
                    });

                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
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
        // alert("call");
        that.getPost();

    };
    elementInfiniteLoad() {
        return <div>
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
        console.log(this.state.isInfiniteLoading)
        feedHeight = window.screen.height*.92;
        // feedHeight = 900;
        console.log("what")
        if (this.props.requestsInfo.count !== 0) {
            DevReq = <DevRequest requestinfo={this.props.requestsInfo.mealrequests} count={this.props.requestsInfo.count}/>;
        }
        return (
            <Infinite  className="DevBodyGrids" containerHeight={feedHeight} elementHeight={212} onInfiniteLoad={this.handleInfiniteLoad} infiniteLoadBeginEdgeOffset={this.state.infiniteLoadBeginEdgeOffset} isInfiniteLoading={this.state.isInfiniteLoading} loadingSpinnerDelegate={this.elementInfiniteLoad()}>
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
