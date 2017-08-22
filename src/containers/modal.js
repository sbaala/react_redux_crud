import React from 'react';
var ModalHeader = React.createClass({
  render: function () {
    return (
      <div className="modal-header">
        {this.props.title}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
});

var ModalBody = React.createClass({
  render: function () {
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    )
  }
});

var ModalFooter = React.createClass({
  render: function () {
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    )
  }
});

var Modal = React.createClass({
  render: function () {
    return (<div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title="Modal Title"/>
            <ModalBody content = "Modal Content" />
            <ModalFooter />
          </div>
        </div>
      </div>)
  }
});

export default  Modal;