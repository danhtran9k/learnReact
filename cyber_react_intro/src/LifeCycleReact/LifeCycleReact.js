import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

/**
 * Life Cycle chỉ có trong class Component
 * LCR 16.0 sẽ khác, 16.4+ sẽ khác
 *  16.4:
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 *
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

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent />
      </div>
    );
  }
  
  //   Component con khi chạy cũng sẽ chạy các lifeCycle tương tự như cha
  componentDidMount() {
    console.log('componentDidMount');
  }
}
