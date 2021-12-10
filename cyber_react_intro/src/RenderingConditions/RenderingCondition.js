import React, { Component } from 'react';

export default class RenderingCondition extends Component {
  login = false;
  userName = 'Anakin';

  renderContent = () => {
    if (this.login) {
      return <p>Hello jedi {this.userName} with function</p>;
    }
    return <button>Login</button>;
  };

// 

/**
//   Toán tử 3 ngoi phải return về jsx
 * 
 * The empty tags (<>...</>) in react do not support keys or attributes. However, since they're meant as a shorter syntax for <React.Fragment>
 * https://www.designcise.com/web/tutorial/how-to-add-a-key-to-an-empty-tag-in-react
 * Tuy nhiên falsy value của React kkhác falsy của js, vd giá trị 0 React tính là True !! => cẩn thận, an toàn thì convert
 * Với các hàm logic phức tạp nên tách riêng hàm
 */
  render() {
    return (
      <div>
        <h1>Rendering condition with Ternary Operator</h1>
        {this.login ? <p>Hello {this.userName}</p> : <button>Login</button>}
        <h1>Rendering condition with function</h1>
        {this.renderContent()}
      </div>
    );
  }
}
