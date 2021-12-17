import React, { PureComponent } from 'react';

export default class PureNoProps extends PureComponent {
  // PureComponent sẽ đi kèm phương thức shouldComponentUpdate
  // -> Kiểm tra props đaầu vào có thay đổi hay ko
  render() {
    console.log('PureNoProps loaded');

    return (
      <div className="card text-white bg-dark col-3">
        <img
          style={{ width: '100%', height: 250 }}
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png"
          alt="123"
        />
        <div className="card-body">
          <h4 className="card-title">Pure No props</h4>
          <p className="card-text">Sẽ ko load lại khi state thay đổi</p>
        </div>
      </div>
    );
  }
}
