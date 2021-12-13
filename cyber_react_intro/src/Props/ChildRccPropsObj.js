import React, { Component } from 'react';

export default class ChildRccPropsObj extends Component {
  // Cũng có thể viết 1 hàng render riêng nhận arr là tham số - para
  // Return về mảng jsx button và tách riêng thành hàm
  // Gọi lại 2 lần
  renderSize = () => {
    let { size } = this.props.productItem;
    return size.map((number, index) => {
      return <button key={index}>{number}</button>;
    });
  };

  render() {
    // es6 destructuring để code gọn hơn,
    // nếu để ngoài render thì khi gọi trong return lại phải thêm this
    // -> Tương tự DataBinding
    let { src, name, price, desc } = this.props.productItem;
    let { shoesSizeGlobal } = this.props;

    return (
      <div>
        <div style={{ width: 400 }} className="card text-left">
          <img className="card-img-top" src={src} alt={name} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <p className="card-text">Size in stock </p>
            {this.renderSize()}

            <p className="card-text">Size global</p>
            {shoesSizeGlobal.map((number, index) => {
              return (
                <button className="btn btn-success" key={index}>
                  {number}
                </button>
              );
            })}

            <button
              onClick={() => {
                this.props.showAlert(desc);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
