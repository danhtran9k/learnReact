/**
 * Lồng DataBinding trong {} -> 'scope'
 *
 */

import React, { Component } from 'react';

export default class DataBindingRCC extends Component {
  // Tạo 1 thuộc tính - property -> vì là obj của class
  // constructor(props) {
  //   super(props);
  //   this.name = 'Anakin Skywalker';
  // }

  // Vì sử dụng create-react-app nên hỗ trợ cú pháp viết tắt
  // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  // https://medium.com/%40damianperaltam/using-class-instance-properties-in-react-with-create-react-app-and-babel-4ac4da5299e
  // https://2ality.com/2017/07/class-fields.html
  // Tuy nhiên nếu viết thẳng là this.name sẽ báo lỗi

  name = 'Anakin Skywalker';

  // Hạn chế sử dụng chữ class
  // Đây là thuộc tính obj binding

  character = {
    name: 'Dark Vader',
    charClass: 'lord',
  };
  render() {
    // Trong hàm (method) chỉ có biến
    // Biến trong đây local ko share ra ngoài scope

    const job = 'jedi';

    const character2 = {
      name: 'Yoda',
      charClass: 'teacher',
    };
    return (
      <div>
        <h2>Data Binding RCC - class</h2>
        <h1>
          Hello {job} {this.name}
        </h1>
        <h3 className="text-success">
          Binding obj: {this.character.charClass} ... {this.character.name}!
        </h3>
        <h4 className="text-warning">
          Student of {character2.charClass} - {character2.name}
        </h4>
      </div>
    );
  }
}
