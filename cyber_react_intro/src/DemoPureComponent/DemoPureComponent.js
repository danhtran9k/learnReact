import React, { Component } from 'react';
import Profile from './Profile';

export default class DemoPureComponent extends Component {
  // State nói chung -> tất cả data làm component render lại
  state = {
    /**
     *
     * In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
     * https://developer.mozilla.org/en-US/docs/Glossary/Primitive
     *
     */
    // Dùng kỹ thuật js short-circuit ở giao diện để set default value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators

    like: null,
  };

  likeImage = () => {
    let likeHienTai = this.state.like + 1;
    this.setState({
      like: likeHienTai,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">PURE COMPONENT</h3>
        <Profile like={this.state.like} />
        <br />
        <div className="card text-white bg-default">
          {/* 
          Kỹ thuật set default ko cần qua state => dùng short-circuit evaluation
            */}
          <h3 style={{ color: 'red' }}>
            Số lượt thả tim ({this.state.like || 0})
          </h3>
          <div className="card-body">
            <button
              className="btn"
              style={{ color: 'red', border: '3px solid red' }}
              onClick={() => {
                this.likeImage();
              }}
            >
              Thả tim <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
