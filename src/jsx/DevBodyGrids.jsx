import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap-theme.min.css';
import DevRequest from './DevRequest.jsx';
import axios from 'axios';
// import $ from 'jquery';
import jQuery from 'jquery';
import {Modal,Button,OverlayTrigger} from 'react-bootstrap';



var DevReq;
var dbarr;

class DevBodyGrids extends React.Component {
    constructor(props,context){
        jQuery.support.cors = true;
        super(props,context);
        this.state = {
            requests: [],
            dvalue: '',
            svalue:'',
            avvalue:'',
            lvalue:'',
            showModal: false

        };
        this.addRequest = this.addRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    };


    close() {
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };
    update() {
        axios.get('http://139.59.16.82:3000/listings/90')
            .then(function(response) {

                console.log(response.data);
                dbarr = response.data;
                console.log("from listing");
                console.log(dbarr);
                var newarr = [];
                for(var i = 0; i < dbarr.length; i++) {
                    newarr.push({
                        key: Date(),
                        description: dbarr[i].message,
                        availtime:  dbarr[i].time,
                        location:  dbarr[i].location,
                        schoolyear:  dbarr[i].schoolyear,
                        userid:  dbarr[i].email,
                        allergy:  dbarr[i].allergies,
                        hobby:  dbarr[i].hobbies
                    })
                }
                this.setState({
                    requests: newarr
                });

            }.bind(this))
            .catch(function (error) {
                    // console.log(response);
                }
            );
    };
    componentWillMount() {
        this.update();
        setInterval(this.update, 10000);

    }
    handleChange(event) {
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

        var requestArray = this.state.requests;
        requestArray.unshift(
            {
                key: Date(),
                description: this._descriptionElement.value,
                availtime: this._availtimeElement.value,
                location: this._locationElement.value
            }
        );
        this.setState({
            requests: requestArray
        });
        this.setState ({
            dvalue: '',
            avvalue:'',
            lvalue:''
        }) ;
        // e.preventDefault();

        var mydata = {
            "message": "let's eat",
            "date": "Dec 12",
            "time": "2-4pm",
            "location" : "Lenior"
        };
        var jsoned = JSON.stringify(mydata);
        // axios.post('http://139.59.16.82:3000/create',{
        //       "message": "let's eat",
        //       "date": "Dec 12",
        //       "time": "2-4pm",
        //       "location" : "Lenior"
        //     })
        //     .then(function(response) {
        //        console.log(response.data.success);
        //     }.bind(this))
        //     .catch(function (error) {
        //     }
        // );
        this.setState({ showModal: false });

    };
    render() {
        //    const popover = (
        //   <Popover id="modal-popover" title="popover">
        //     very popover. such engagement
        //   </Popover>
        // );
        // const tooltip = (
        //   <Tooltip id="modal-tooltip">
        //     wow.
        //   </Tooltip>
        // );
        if (this.state.requests.length === 0) {
            DevReq = <div></div>;
        } else {
            DevReq = <DevRequest requestinfo={this.state.requests}/>;
        }
        return (
            <div className="DevBodyGrids">
                <div className="container-fluid">
                    {DevReq}
                </div>
                <Button bsStyle="primary" bsSize="large" onClick={this.open}> Launch demo modal</Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <form onSubmit={this.addRequest}>
                        <Modal.Header className="modal-header" closeButton>
                            <Modal.Title className="modal-title">Compose meal Request</Modal.Title>
                        </Modal.Header>
                        <div className="modal-container">
                            <Modal.Body className="modal-body">
                                <textarea placeholder="Eat me please..." ref={(a) => this._descriptionElement = a} id="description" onChange={this.handleChange} value={this.state.dvalue}></textarea>
                            </Modal.Body>
                            <Modal.Footer className="modal-footer">
                                <div className="col-sm-5">
                                    <div className="input-group">
                                        <span className="input-group-addon">Avail Time </span>
                                        <input type = "text" className="form-control" id="availtime" ref={(a) => this._availtimeElement = a} onChange={this.handleChange} placeholder="" value={this.state.avvalue} required>
                                        </input>

                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon">Location</span>
                                        <input type = "text" className = "form-control" id="location" ref={(a) => this._locationElement = a} onChange={this.handleChange} placeholder="" value={this.state.lvalue} required>
                                        </input>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary modalbutton" onSubmit={this.addRequest} >Send</button>

                            </Modal.Footer>
                        </div>
                    </form>
                </Modal>

            </div>

        );
    }
}

export default DevBodyGrids;
