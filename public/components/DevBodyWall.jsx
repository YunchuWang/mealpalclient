import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/bootstrap-theme.css";
import "../css/bootstrap-theme.min.css";
import DevRequest from "./DevRequest.jsx";
// import axios from "axios";
import {Modal, Button, OverlayTrigger} from "react-bootstrap";
import DevModal from './DevModal'


class DevBodyWall extends React.PureComponent {
    constructor(props,context){
        // jQuery.support.cors = true;
        super(props,context);
        this.state = {
            dvalue: '',
            svalue:'',
            avvalue:'',
            lvalue:''
            // reqcount: 0
        };
        this.addRequest = this.addRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    };


    close() {
        this.props.actions.hideWriteRequest();
    };

    open() {
        this.props.actions.showWriteRequest();
    };
    update() {
        // axios.get('http://139.59.16.82:3000/listings/90')
        //     .then(function(response) {
        //
        //         console.log(response.data);
        //         dbarr = response.data;
        //         console.log("from listing");
        //         console.log(dbarr);
        //         var newarr = [];
        //         for(var i = 0; i < dbarr.length; i++) {
        //             newarr.push({
        //                 key: Date(),
        //                 description: dbarr[i].message,
        //                 availtime:  dbarr[i].time,
        //                 location:  dbarr[i].location,
        //                 schoolyear:  dbarr[i].schoolyear,
        //                 userid:  dbarr[i].email,
        //                 allergy:  dbarr[i].allergies,
        //                 hobby:  dbarr[i].hobbies
        //             })
        //         }
        //         this.setState({
        //             requests: newarr
        //         });
        //
        //     }.bind(this))
        //     .catch(function (error) {
        //             // console.log(response);
        //         }
        //     );
    };
    handleChange(event) {
        // console.log("pass");
        switch(event.target.id) {
            case 'availtime':
                this.setState({avvalue: event.target.value});
                break;
            case 'location':
                this.setState({lvalue: event.target.value});
                break;
            case 'description':
                this.setState({dvalue: event.target.value});
                break;
        }
    };
    addRequest(e) {
        var newrequest = {
          key: Date(),
          description: this.state.dvalue,
          availtime: this.state.avvalue,
          location: this.state.lvalue
        }
        this.props.actions.addRequest(newrequest);
        this.setState ({
            dvalue: '',
            avvalue:'',
            lvalue:''
            // reqcount: this.state.reqcount + 1
        }) ;
        e.preventDefault();
        this.props.actions.hideWriteRequest();
    };

    render() {
        var DevReq =  <div></div>;
        console.log("pass")
        if (this.props.requestsInfo.count !== 0) {
            DevReq = <DevRequest requestinfo={this.props.requestsInfo.mealrequests} count={this.props.requestsInfo.count}/>;
        }
        return (
            <div className="DevBodyGrids">
                <div className="container-fluid">
                    {DevReq}
                </div>
                <DevModal dvalue={this.state.dvalue} avvalue={this.state.avvalue} lvalue={this.state.lvalue} showModal={this.props.showModal} onHide={this.close} onSubmit={this.addRequest} onChange={this.handleChange}/>
            </div>

        );
    }
}

export default DevBodyWall;
