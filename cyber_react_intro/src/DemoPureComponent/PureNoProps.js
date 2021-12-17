import React, { PureComponent } from 'react';

export default class PureNoProps extends PureComponent {
  // PureComponent sẽ đi kèm phương thức shouldComponentUpdate
  // -> Kiểm tra props đầu vào có thay đổi hay ko
  // props đầu vào ko đổi => ko render
  // tự chỉnh code prop đầu vào thành các đạng follow / sub/ like / donate để check
  // Hoặc check qua các Pure còn lại => ko kéo cả 3 render
  // dành cho các dặng header / footer
  // Có thể truyền like vào => tuy ko render liên quan tim nhưng vẫn sẽ load lại
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
