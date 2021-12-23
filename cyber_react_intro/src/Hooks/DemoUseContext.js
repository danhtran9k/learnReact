import React from 'react';

let arrProduct = [
  { id: 1, name: 'Iphone', price: 1000 },
  { id: 2, name: 'Note 10 plus', price: 5000 },
  { id: 3, name: 'Huawei P20', price: 1200 },
];

const addToCart = (itemClick) => {
  console.log(itemClick);
};

export default function DemoUseContext() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card text-left">
                  <img
                    className="card-img-top"
                    src={'https://picsum.photos/200/200'}
                    alt={index}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrProduct.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quantity * product.price}</td>
                  <td>
                    <button className="btn btn-danger">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
