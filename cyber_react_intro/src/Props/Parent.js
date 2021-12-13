import React, { Component } from 'react';
import ChildClass from './ChildClass';
import ChildFunctional from './ChildFunctional';
import ChildRccPropsObj from './ChildRccPropsObj';
import ChildRfcPropsObj from './ChildRfcPropsObj';

export default class Parent extends Component {
  // Cẩn thận viết nhầm src - source  thành scr !!
  src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/233px-Google_2015_logo.svg.png';

  name = 'google logo';

  // Truyền props obj
  product = {
    id: 1,
    name: 'bitis hunter x2',
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/First-google-logo.gif',
    desc: 'Giày Việt Nam chất lượng cao, êm ái, nâng niu đôi bàn chân !',
    price: 1000,
    size: [36, 39, 41],
  };

  // Truyền props arr - mảng
  sizeGlobal = [36, 37, 38, 39, 40, 41];

  // Truyền props func
  showInfo = (name) => {
    alert(name);
    console.log('props function para:', name);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Child RCC class</h4>
            <ChildClass
              propSource={this.src}
              name={this.name}
              alt={this.name}
            />
            <ChildClass
              propSource="https://upload.wikimedia.org/wikipedia/commons/7/7e/Google_1998_logo.png"
              name="G logo 2"
              alt="G logo 2"
            />
            <hr></hr>
            <h4 className="text-success">Child RCC class</h4>
            <ChildFunctional
              propSource={this.src}
              name={this.name}
              alt={this.name}
            />
          </div>
          <div className="col-6">
            <h4 className="text-info">Class RCC child with obj props</h4>
            <ChildRccPropsObj
              productItem={this.product}
              shoesSizeGlobal={this.sizeGlobal}
              showAlert={this.showInfo}
            />
            <hr></hr>
            <h4 className="text-primary">
              Functional RFC child with obj props
            </h4>
            <ChildRfcPropsObj productItem={this.product} />
          </div>
        </div>
      </div>
      // Vì demo nên props truyền vào và props name đặt khác nhau để minh họa
      // Thực tế sẽ đặt trùng luôn để code tiện hơn, tuy nhiên cần phân biệt rõ
      // Ví dụ TH props name là showAlert nhưng lại dùng hàm showInfo -> lú
      // props function truyền vào component sẽ ở dạng callback
    );
  }
}
