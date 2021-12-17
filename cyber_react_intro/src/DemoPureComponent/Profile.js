import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    console.log('PureComponent Profile loaded');
    return (
      <div className="card text-white bg-dark" style={{ width: 250 }}>
        <img
          style={{ width: 250, height: 170 }}
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png"
          alt="123"
        />
        <div className="card-body">
          <h3>
            Số lượng tim: <i className="fa fa-heart"></i>
            {this.props.like || 0}
          </h3>
          <h4 className="card-title">Họ tên: Lê Thị A</h4>
          <p className="card-text">Tuổi: 18</p>
        </div>
      </div>
    );
  }
}
