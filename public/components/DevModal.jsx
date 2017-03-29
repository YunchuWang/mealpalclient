

import React from 'react';
import {Modal, Button, OverlayTrigger} from "react-bootstrap";
// import DatePicker from 'material-ui/DatePicker';
// import MealPalTimePicker from './MealPalTimePicker'
// import injectTapEventPlugin from 'react-tap-event-plugin';

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
                            <div class="row control-group">

                                <div className="form-group col-xs-4 col-sm-4 floating-label-form-group controls">
                                    <input id="availtime" type = "text" className="form-control" onChange={this.props.onChange} placeholder="Available Time" value={this.props.avvalue} required></input>
                                </div>
                                <div className="form-group col-xs-4 col-sm-4 floating-label-form-group controls">
                                    <input type = "text" className = "form-control" id="location" onChange={this.props.onChange} placeholder="Location" value={this.props.lvalue} required>
                                    </input>
                                </div>
                                <div className="form-group col-xs-4 col-sm-4 floating-label-form-group controls">
                                    <button type="submit" id="butt" className="flat-butt flat-primary-butt flat-double-butt flat-primary-double-butt"><center>Send</center></button>
                                </div>
                            </div>

                        </Modal.Footer>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default DevModal;