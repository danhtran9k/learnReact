import React, { Component } from 'react';
import ChildShouldUpdate from './ChildShouldUpdated';
import { Helmet } from 'react-helmet';

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
      product: {
        id: 1,
        name: 'Javascript',
      },
    };
    console.log('contructor');
  }

  //   https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

  //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
  // Phương thức này ở bản 16.4 trở thành phương thức tĩnh
  // ko truy cập được vào con trỏ this nên có từ khóa "static"
  static getDerivedStateFromProps(newProps, currentState) {
    // console.log('getDerivedStateFromProps');
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
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" />
        </Helmet>
        <h1>Life Cycle React - Should Update</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
              //   number: 1,
              // Tự chỉnh mod chỗ này để test
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: 1,
            });
          }}
        >
          const = 1
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: 5,
            });
          }}
        >
          const = 5
        </button>
        <hr />
        <h3>Parent skill: {this.state.product.name}</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            // let newProduct = this.state.product ;
            // Viết kiểu trên sẽ sai vì là tham chiếu
            // -> truyền thẳng obj cũ vô luôn !! khi đó hàm check shouldUpdate so sánh khác nhau sẽ luôn false vì cùng 1 obj -> alias
            // Kể cả việc dùng lodash ở đây nhưng vì là cùng obj nên ko được
            // Lodash chỉ deep compare tránh trường hợp obj khởi tạo mới qua ... nhưng value ko đổi
            // Nếu ko dùng lodash thì click cùng button setState product sẽ luôn render lại child

            let newProduct = { ...this.state.product };
            newProduct.name = 'React';

            this.setState({
              product: newProduct,
            });
          }}
        >
          Skill React
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            let newProduct = { ...this.state.product };
            newProduct.name = 'R_Native';

            this.setState({
              product: newProduct,
            });
          }}
        >
          Skill R_Native
        </button>
        <ChildShouldUpdate
          number={this.state.number}
          product={this.state.product}
        />
      </div>
    );
  }

  //Được gọi sau render và chỉ gọi 1 lần duy nhất (trạng thái mounting)
  //   Component con khi chạy cũng sẽ chạy các lifeCycle tương tự như cha
  componentDidMount() {
    // console.log('componentDidMount');
  }

  //Lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
  }
}
