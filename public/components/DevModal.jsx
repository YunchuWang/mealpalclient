

import React from 'react';
import {Modal, Button, OverlayTrigger} from "react-bootstrap";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {apihost} from '../constants/global';
import moment from 'moment';
import {toastr} from 'react-redux-toastr';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Dialog from 'material-ui/Dialog';


const hintstyle = {
    color: "#007785"
};
const actionStyle = {
    margin: 0,
    padding: 0,
    backgroundColor: "black"
};
const contentStyle = {
    width: "48%",
    maxWidth: "none"
}
const underlineStyle = {
    borderColor: "#007785"
};
const inputStyle = {
    fontWeight: 400,
    color: "#019058"
};
const underlineFocusStyle = {
    color: "white"
}
class DevModal extends React.Component {
    constructor(props,context){
        super(props,context);
        var _this = this;
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
        return (
            <Dialog
                modal={true}
                open={this.props.showModal} bodyStyle={actionStyle} contentStyle={contentStyle}
            >
                <form onSubmit={this.addRequest} className="modalform">
                    <div className="modal-header">
                        <h4 className="modal-title">Compose meal Request</h4>
                        <IconButton tooltip="Close" className="iconbtn" tooltipPosition="bottom-left" onTouchTap={this.close}>
                            <Close className="closebtn" color="ghostwhite"/>
                        </IconButton>
                    </div>
                    <div className="modal-container">
                        <div className="modal-body">
                            <textarea rows="4" cols="10" placeholder="Eat me please..." id="description" onChange={this.handleChange} value={this.state.dvalue} maxLength="140" required></textarea>
                        </div>
                        <div className="modal-footer">
                            <div className="col-xs-6 col-sm-6 mealModalTime">
                                <DatePicker hintText="Set a date" onChange={this.handleDate} value={this.state.date} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></DatePicker>
                                <TimePicker hintText="Set a time" onChange={this.handleTime} value={this.state.time} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></TimePicker>
                            </div>
                            <div className="col-xs-6 col-sm-6 mealModalOthers">
                                <TextField hintText="Location" id="location" onChange={this.handleChange} value={this.state.lvalue} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></TextField>
                                <button type="submit" id="butt" className="flat-butt flat-primary-butt flat-double-butt flat-primary-double-butt"><center>Send</center></button>
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        )
    }
}

export default DevModal;

DevModal.contextTypes = {
    router: React.PropTypes.object.isRequired
};
