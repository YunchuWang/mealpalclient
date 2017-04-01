

import React from 'react';
import {Modal, Button, OverlayTrigger} from "react-bootstrap";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';

const hintstyle = {
    color: "#007785"
};
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
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.onHide}>
                <form onSubmit={this.props.onSubmit}>
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title className="modal-title">Compose meal Request</Modal.Title>
                    </Modal.Header>
                    <div className="modal-container">
                        <Modal.Body className="modal-body">
                            <textarea rows="4" cols="10" placeholder="Eat me please..." id="description" onChange={this.props.onChange} value={this.props.dvalue} required></textarea>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                                <div className="col-xs-6 col-sm-6 mealModalTime">
                                    <DatePicker hintText="Set a date" onChange={this.props.onDateChange} value={this.props.date} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></DatePicker>
                                    <TimePicker hintText="Set a time" onChange={this.props.onTimeChange} value={this.props.time} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></TimePicker>
                                </div>
                                <div className="col-xs-6 col-sm-6 mealModalOthers">
                                    <TextField hintText="Location" id="location" onChange={this.props.onChange} value={this.props.lvalue} hintStyle={hintstyle} underlineStyle={underlineStyle} inputStyle={inputStyle} underlineFocusStyle={underlineFocusStyle} required></TextField>
                                    <button type="submit" id="butt" className="flat-butt flat-primary-butt flat-double-butt flat-primary-double-butt"><center>Send</center></button>
                                </div>


                        </Modal.Footer>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default DevModal;

                                    // <input type = "text" className = "form-control" id="location" onChange={this.props.onChange} placeholder="Location" value={this.props.lvalue} required>
                                    // </input>