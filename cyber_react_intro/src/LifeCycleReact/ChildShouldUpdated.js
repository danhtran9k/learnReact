import React, { Component } from 'react';
// import _ from 'lodash'
// Dùng cdn thì xem trong shouldComponentUpdate

export default class ChildShouldUpdate extends Component {
  //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
  static getDerivedStateFromProps(newProps, currentState) {
    // console.log('getDerivedStateFromProps_child')
    return null;
  }

  //   Chỉ 1 số TH rất đặt biệt mới phải dùng lifeCycle này
  // -> PureComponent đã hardcode sẵn
  //   https://reactjs.org/docs/react-component.html#shouldcomponentupdate
  shouldComponentUpdate(newProps, newState) {
    const _ = window._;
    // Nếu dùng npm install thì khai báo qua import và ko dùng dòng này

    if (newProps.number !== this.props.number) {
      return true;
    }
    if (newProps.number >= 4) {
      return true;
    }

    // Lodash chỉ deep compare tránh trường hợp obj khởi tạo mới qua ... nhưng value ko đổi
    if (!_.isEqual(newProps, this.props)) {
      console.log('lodash cdn compare');
      return true;
    }
    // Kiểu này củ chuối và vẫn có thể fail nếu cùng tham chiếu tới 1 obj
    // if (newProps.product.name != this.props.product.name) {
    //   return true;
    // }
    console.log("all condition check fail")
    return false;
  }

  render() {
    console.log('render ChildShouldUpdate');
    return (
      <div>
        <h3>Child Skill: {this.props.product.name}</h3>
        <div className="card text-white bg-dark col-3">
          <img
            style={{ width: '100%', height: 250 }}
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="normal component"
          />
          <div className="card-body">
            {/* <h3>
            Số lượng tim: <i className="fa fa-heart"></i>
            {this.props.like || 0}
          </h3> */}
            <h4 className="card-title">Normal No Props</h4>
            <p className="card-text">Luôn load lại khi state thay đổi</p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount_child');
  }

  //   Khi unmount sẽ chạy life cycle này, pass render
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // https://reactjs.org/docs/react-component.html#componentwillunmount
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
