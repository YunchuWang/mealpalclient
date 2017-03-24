import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
// import Autosuggest from 'react-autosuggest';
// this class is not used;
import {Modal, Button, OverlayTrigger} from "react-bootstrap";
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
                            <textarea placeholder="Eat me please..." id="description" onChange={this.props.onChange} value={this.props.dvalue} required></textarea>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <div className="col-sm-5">
                                <div className="input-group">
                                    <span className="input-group-addon">Avail Time </span>
                                    <input type = "text" className="form-control" id="availtime" onChange={this.props.onChange} placeholder="" value={this.props.avvalue} required>
                                    </input>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">Location</span>
                                    <input type = "text" className = "form-control" id="location" onChange={this.props.onChange} placeholder="" value={this.props.lvalue} required>
                                    </input>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary modalbutton">Send</button>
                        </Modal.Footer>
                    </div>
                </form>
            </Modal>
        )
    }
}







export default DevModal;
