import React, { Component } from 'react';

export default class StateDemo extends Component {
  /**
   * state: là thuộc tính có sẵn của react class component
   * state giúp ĐN những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
   */

  state = {
    status: false,
  };

  userLogin = {
    name: 'Anakin',
    age: 20,
  };

  statusNoState = false;

  /**
   * Hàm render chỉ được gọi 1 lần duy nhất khi React chạy lần đầu
   * Sau đó dù các các prop bị thay đổi nhưng vẫn ko call lại render
   * Kể cả khi cố tình gọi this.render()
   *  */
  // =======================================================

  loginNoState = () => {
    this.statusNoState = true;
    console.log('statusNoState:', this.statusNoState);
    this.render();
  };

  renderUserLoginNoState = () => {
    if (this.statusNoState) {
      return <div className="text-danger">{this.userLogin.name}</div>;
    }

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

  // =======================================================
  //Không set giá trị trực tiếp trên state
  //   -> phải thông qua phương thức setState
  //setState là phương thức có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện
  //   Note là bấm nút dưới sẽ render lại nút warning luôn !!

  //   loginNoSetState = () => {
  //     this.state.status = true;
  //     console.log(this.state);
  //   };

  //   renderUserLoginNoSetState = () => {
  //     if (this.state.status) {
  //       return <div className="text-warning">{this.userLogin.name}</div>;
  //     }
  //     return (
  //       <button
  //         onClick={() => {
  //           this.loginNoSetState();
  //         }}
  //         className="bg-warning"
  //       >
  //         Login without setState
  //       </button>
  //     );
  //   };

  // =======================================================
  //Gọi phương thức setState => truyền vào state mới
  //setState: là phương thức bất đồng bộ

  loginWithSetState = () => {
    //   state mới phải có cấu trúc giống hoặc con của cấu trúc cũ kèm es6
    let newState = {
      status: true,
    };

    // this.setState(newState)
    // console.log(this.state);
    // console.log ở ngoài sẽ ko đúng vì setState bất đồng bộ
    // setState có 2 tham số, arg2  là callback sau khi thay đổi

    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  renderUserLoginWithSetState = () => {
    if (this.state.status) {
      return <div className="text-success">{this.userLogin.name}</div>;
    }
    return (
      <button
        onClick={() => {
          this.loginWithSetState();
        }}
        className="bg-success"
      >
        Login with setState
      </button>
    );
  };

  /**
   * Gọi hàm thì có (), gọi callback thì ko có,
   * Gọi hàm DN trước hoặc có args dưới dạng callback thì đưa vào trong callback dạng anonymouse và có ([args]) bình thường
   */

  // =======================================================
  //   Uncomment để check, tuy nhiên sẽ bị ESLint báo lỗi
  render() {
    return (
      <div>
        <h3>Note interaction between 3 button</h3>
        <h3>Click only green will render both Yellow and green</h3>
        <h3>Click red then green will render all 3</h3>
        <h3>Green will cause all 3 re-render</h3>
        <h3>Commnent because ES Lint give warning</h3>
        {this.renderUserLoginNoState()}
        {/* {this.renderUserLoginNoSetState()} */}
        {this.renderUserLoginWithSetState()}
      </div>
    );
  }
}
