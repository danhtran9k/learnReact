import React, { PureComponent } from 'react';

export default class PurePrimitiveProps extends PureComponent {
  render() {
    console.log('PurePrimitiveProps loaded');

    return (
      <div className="card text-white bg-dark col-3">
        <img
          style={{ width: '100%', height: 250 }}
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png"
          alt="123"
        />
        <div className="card-body">
          <h4 className="card-title">Pure Primitive</h4>
          <p className="card-text">Luôn reload lại khi giao diện reload</p>
          <h4>
            Số follow: <i className="fa fa-diamond"></i>
            {this.props.follow || 0}
          </h4>
        </div>
      </div>
    );
  }
}
