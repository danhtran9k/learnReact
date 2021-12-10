import React, { Component } from 'react';

export default class StateDemo extends Component {
  /**
   * state: là thuộc tính có sẵn của react class component
   * state giúp ĐN những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
   */

  state = {
    status: false,
  };
  statusNoState = false;
  //setState là phương thức có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện

  userLogin = {
    name: 'Anakin',
    age: 20,
  };

  /**
   * Hàm render chỉ được gọi 1 lần duy nhất khi React chạy lần đầu
   * Sau đó dù các các prop bị thay đổi nhưng vẫn ko call lại render
   * Kể cả khi cố tình gọi this.render()
   *  */

  loginNoState = () => {
    //Không set giá trị trực tiếp trên state mà phải thông qua phương thức setState
    this.statusNoState = true;
    console.log('statusNoState:', this.statusNoState);
    this.render();
    //Gọi phương thức setState => truyền vào state mới
    //setState: là phương thức bất đồng bộ
    // this.setState(newState, () => {
    //   console.log(this.state);
    // });
  };

  renderUserLoginWrong = () => {
    if (this.statusNoState) {
      return <div className="text-danger">{this.userLogin.name}</div>;
    }
    /**
     * Gọi hàm thì có (), gọi callback thì ko có,
     * Gọi hàm DN trước hoặc có args dưới dạng callback thì đưa vào trong callback dạng anonymouse và có ([args]) bình thường
     */
    return (
      <button
        onClick={() => {
          this.loginNoState();
        }}
        className="bg-danger"
      >
        Login no state
      </button>
    );
  };

  render() {
    return <div>{this.renderUserLoginWrong()}</div>;
  }
}
