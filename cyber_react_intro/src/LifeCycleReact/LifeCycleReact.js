import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

/**
 * Life Cycle chỉ có trong class Component
 * LCR 16.0 sẽ khác, 16.4+ sẽ khác
 *  16.4:
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * https://www.w3schools.com/react/react_lifecycle.asp
 * https://reactjs.org/docs/react-component.html
 */

export default class LifeCycleReact extends Component {
  // Khai báo chuẩn constructor, chạy đầu tiên
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log('contructor');
  }

  //   https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

  //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
  // Phương thức này ở bản 16.4 trở thành phương thức tĩnh
  // ko truy cập được vào con trỏ this nên có từ khóa "static"
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  //Được gọi khi setState hoặc props
  // https://reactjs.org/docs/react-component.html#shouldcomponentupdate
  // Tuy nhiên nên dùng PureComponent hơn là lifeCycle này
  shouldComponentUpdate(newProps, newState) {
    //return true thì chạy tiếp các lifecycle còn lại,
    // ngược lại return false thì sẽ dừng lại -> không chạy tiếp các lifecycle khác
    return true;
  }

  render() {
    console.log('renderParent');
    return (
      <div>
        <h1>Life Cycle Update</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <ChildComponent />
      </div>
    );
  }

  //Được gọi sau render và chỉ gọi 1 lần duy nhất (trạng thái mounting)
  //   Component con khi chạy cũng sẽ chạy các lifeCycle tương tự như cha
  componentDidMount() {
    console.log('componentDidMount');
  }
  
  //Lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
}
