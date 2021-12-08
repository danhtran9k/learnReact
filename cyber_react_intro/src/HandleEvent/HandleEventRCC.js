import React, { Component } from 'react';

export default class HandleEventRCC extends Component {
  //Định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
  handleClickAlert = () => {
    alert('callback function when click');
  };

  handleClick = (name) => {
    alert('hello: ' + name);
  };

  render() {
    /**
     * Cách viết direct function vào rất chuối
     * Nên định nghĩa hàm riêng ra
     * onClick sẽ nhận 1 callback function -> ko có đóng mở ngoặc
     *
     * Nếu sử dụng ES6 sẽ có vấn đề nhỏ
     * https://reactjs.org/docs/handling-events.html
     * Tuy nhiên code đơn giản và nếu ko phức tạp thì ưu tiên arrow
     */
    return (
      // Nếu đặt hàm trong đây thì ko cần this 
      // -> tương tự phần data binding 
      
      <div>
        <h1>RCC handle Event</h1>
        <button
          id="btnClickMe"
          onClick={function () {
            alert('direct function');
          }}
        >
          Direct func
        </button>

        <button id="btnClickMe" onClick={this.handleClickAlert}>
          Callback no para
        </button>

        <br />

        <button
          id="btnClickMe"
          onClick={() => {
            alert('arrow es6');
          }}
        >
          Arrow direct
        </button>

        <button
          id="btnClickMe"
          onClick={() => {
            this.handleClickAlert();
          }}
        >
          Arrow callback
        </button>
        {/* <button
          id="btnClickMe"
          onClick={this.handleClickParam.bind(this, 'hello men')}
        >
          Click me!
        </button> */}
      </div>
    );
  }
}
