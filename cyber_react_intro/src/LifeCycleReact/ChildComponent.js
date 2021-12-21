import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    console.log('renderChildComponent');
    return (
      <div>
        <div className="card text-white bg-dark col-3">
          <img
            style={{ width: '100%', height: 250 }}
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="normal component"
          />
          <div className="card-body">
            {/* <h3>
            Số lượng tim: <i className="fa fa-heart"></i>
            {this.props.like || 0}
          </h3> */}
            <h4 className="card-title">Normal No Props</h4>
            <p className="card-text">Luôn load lại khi state thay đổi</p>
          </div>
        </div>
      </div>
    );
  }
}
