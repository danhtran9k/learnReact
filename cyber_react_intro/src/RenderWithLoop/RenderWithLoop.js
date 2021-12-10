import React, { Component } from 'react';

export default class RenderWithLoop extends Component {
  producList = [
    {
      id: 1,
      name: 'black car',
      price: 1000,
      img: './carbasic/products/black-car.jpg',
    },
    {
      id: 2,
      name: 'red car',
      price: 2000,
      img: './carbasic/products/red-car.jpg',
    },
    {
      id: 3,
      name: 'silver car',
      price: 3000,
      img: './carbasic/products/silver-car.jpg',
    },
    {
      id: 4,
      name: 'steel car',
      price: 4000,
      img: './carbasic/products/steel-car.jpg',
    },
  ];

  renderTable = () => {
    //Cách 2: Dùng map
    return this.producList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img
              src={product.img}
              style={{ width: '200px' }}
              alt={product.id}
            />{' '}
          </td>
          <td></td>
        </tr>
      );
    });
  };

  renderTableForLoop = () => {
    let mangTrComponent = [];
    for (let index = 0; index < this.producList.length; index++) {
      const product = this.producList[index];
      // Tạo ra đối tượng jsx (ktra bằng consol.log)
      // Khác với js thuần
      let trJSX = (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img
              src={product.img}
              style={{ width: '200px' }}
              alt={product.id}
            />{' '}
          </td>
          <td></td>
        </tr>
      );
      // console.log để ktra sẽ thấy là jsx chứ ko phải html gi hết
      // PHải thêm thuộc tính key để các đối tượng phân biệt với nhau
      // Nếu ko sẽ thấy warning của eslint -> key={index}
      console.log('trJSX:', trJSX);
      mangTrComponent.push(trJSX);
    }
    console.log(<tr></tr>);
    // Ở đây ngoài return 1 div cha lớn như thường
    // có thể return 1 mảng jsx gồm các ele con là 1 jsx lớn
    return mangTrComponent;
  };

  render() {
    // b4-table -> html 2 jsx
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          {/* <tbody>{this.renderTableForLoop()}</tbody> */}
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
