import React, { PureComponent } from 'react';

export default class PureObjProps extends PureComponent {
  render() {
    console.log('PureObjProps loaded');
    return (
      <div className="card text-white bg-dark col-3">
        <img
          style={{ width: '100%' , height: 250 }}
          className="card-img-top"
          src="https://image.pngaaa.com/142/4144142-middle.png"
          alt="angular - props obj"
        />
        <div className="card-body">
          <h4 className="card-title">Pure obj Props</h4>
          <p className="card-text">cẩn thận state</p>
          <h4>
            Số sub: <i className="fa fa-check-circle-o"></i>{' '}
            ({this.props.sub.soLuong || 0})
          </h4>
        </div>
      </div>
    );
  }
}
