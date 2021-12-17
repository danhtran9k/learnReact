import React, { Component } from 'react';

export default class LikeProfile extends Component {
  render() {
    return (
      <div className="mt-5">
        <div
          className="card text-white bg-default text-dark"
          style={{ width: 300 }}
        >
          <div className="card-body">
            <button
              onClick={() => {}}
              style={{ color: 'red', border: '1px solid red' }}
              className="card-title"
            >
              Like <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
