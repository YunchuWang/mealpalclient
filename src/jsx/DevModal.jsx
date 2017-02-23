import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
// import Autosuggest from 'react-autosuggest';
// this class is not used;
class DevModal extends React.Component {
   render() {
      return (
                <div>
                    <form id="myModal" className="modal fade" role="dialog" onSubmit={this.addItem}>
                          <div className="modal-dialog modalBody">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Compose meal Request</h4>
                              </div>
                              <div className="modal-container">
                                <div className="modal-body">
                                    <textarea placeholder="Eat me please..."></textarea>
                                </div>
                                <div className="modal-footer">
                                    <div className="col-sm-5">
                                        <div className="input-group">
                                            <span className="input-group-addon">UserId</span>
                                            <input type = "text" className = "form-control" placeholder="" required="required">
                                            </input>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">SchoolYear</span>
                                            <input type = "text" className="form-control" placeholder="" required="required">
                                            </input>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">Avail Time</span>
                                            <input type = "text" className="form-control" placeholder="" required="required">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="input-group">
                                            <span className="input-group-addon">Location</span>
                                            <input type = "text" className = "form-control" placeholder="" required="required">

                                            </input>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">Allergies</span>
                                            <input type = "text" className="form-control" placeholder="" required="required">
                                            </input>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">Hobbies</span>
                                            <input type = "text" className="form-control" placeholder="" required="required">
                                            </input>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary modalbutton" data-dismiss="modal">Send</button>
                                </div>
                              </div>
                            </div>
                          </div>
                  </form>

                </div>

      );
   }
}

export default DevModal;
