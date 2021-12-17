import React, { Component } from 'react';

export default class ModelProfile extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3>Profile</h3>
        <div className="card text-white bg-dark" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="123"
          />
          <div className="card-body">
            <h4 className="card-title">Nodel Profile demo</h4>
            <p className="card-text">placeholder</p>
            <span style={{ color: 'pink' }}>
              10 <i className="fa fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
