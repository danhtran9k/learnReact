import React, { Component } from 'react';
import NormalNoProps from './NormalNoProps';
import PureNoProps from './PureNoProps';
import PurePrimitiveProps from './PurePrimitiveProps';
import PureObjProps from './PureObjProps';

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
    donate: { soLuong: null },

    like: null,
    follow: null,
    sub: { soLuong: null },
  };
  /**
   * Bản chất của setState là luôn luôn re-render lại mọi component thường
   * -> dễ thấy là NormalNoProps luôn log ra dù click bất cứ nút nào -> ko quan tâm props state gì cả
   * Và thật ra số lượng sub-scribe cũng luôn được render lại
   * Có thể hiểu Redux như 1 dạng Pure xịn kèm Store nếu dùng dispatch về store tổng
   * Khi dùng redux thì ta thường ko dùng setState mà chuyển về store xử lý nên ko thấy hiện tượng re-render toàn bộ
   * ko cần phải setup kết nối redux để test lại -> chỉ cần nhìn NormalNoProps hiện tại ko có bất cứ tính chất gì đặc biệt nhưng luôn luôn re-log lại là KL được
   *
   */

  likeImage = () => {
    let likeHienTai = this.state.like + 1;
    this.setState({
      like: likeHienTai,
    });
  };

  following = () => {
    let followHienTai = this.state.follow + 1;
    this.setState({
      follow: followHienTai,
    });
  };

  subscribe = () => {
    let subHienTai = this.state.sub;
    subHienTai.soLuong += 1;
    this.setState({
      sub: subHienTai,
      //   Nếu gán theo cách trên:
      //   -> PureComponent ko load , Component load OK -> như redux
      //   sub: { ...subHienTai },
      //   Nếu ko gán copy {...subHienTai} => pure sẽ ko load lại !!
      //   PureComponent compare như redux
    });
    // console.log(this.state);
    // State sẽ được cập nhập dù viết cách nào -> vì số sub được re-render
  };

  donate100k = () => {
    let soLuongDonate = this.state.donate;
    soLuongDonate.soLuong += 100;
    this.setState({
      donate: { ...soLuongDonate },
    });
    console.log(this.state);
  };

  /**
   * ko được lạm dụng Pure Component
   * có thể phát sinh lỗi ko ngờ
   * Đối với các dạng obj, arr => ng tắc re-render như state => phải deepnew
   * Chỉ nên xài cho các dạng Header , Slider, footer
   * Giao diện cố định ko nhận Props State gì
   */
  render() {
    console.log('>>>>Parent loaded');
    return (
      <div className="container">
        <h3 className="text-center">PURE COMPONENT</h3>
        <div className="row">
          <NormalNoProps />
          <PureNoProps />
          <PurePrimitiveProps follow={this.state.follow} />
          <PureObjProps sub={this.state.sub} />
        </div>
        <br />
        {/* 
          Kỹ thuật set default ko cần qua state => dùng short-circuit evaluation
            */}
        <div className="row">
          <div className="col-3"></div>

          <div className="col-3">
            <h4 style={{ color: 'red' }}>
              Số tim React ({this.state.like || 0})
            </h4>
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

          <div className="col-3">
            <h4 style={{ color: 'red' }}>
              Số follow Vue ({this.state.follow || 0})
            </h4>
            <button
              className="btn"
              style={{ color: 'red', border: '3px solid red' }}
              onClick={() => {
                this.following();
              }}
            >
              Follow <i className="fa fa-diamond"></i>
            </button>
          </div>

          <div className="col-3">
            <h4 style={{ color: 'red' }}>
              Số sub Angular ({this.state.sub.soLuong || 0})
            </h4>
            <button
              className="btn"
              style={{ color: 'red', border: '3px solid red' }}
              onClick={() => {
                this.subscribe();
              }}
            >
              Subscribe <i className="fa fa-check-circle-o"></i>
            </button>
          </div>
          <div className="col-12">
            <button
              className="btn"
              style={{ color: 'red', border: '3px solid red' }}
              onClick={() => {
                this.donate100k();
              }}
            >
              Donate 100k ko render<i className="fa fa-diamond"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
