// imrse snippet
import React, { useState, useEffect } from 'react';

export default function DemoHookUseEffect() {
  let [number, setNumber] = useState(1);

  //useEffect là hàm chạy sau khi giao diện render thay cho componentDidUpdate ,componentDidMount , componentWillUnmount trong mọi trường hợp
  //   Thay cho các life Cycle chạy sau khi render()
  useEffect(() => {
    console.log('didmount');
    console.log('didupdate');
  });

  console.log('render');
//   Log re sẽ thấy render chạy trước log trong useEffect dù được khai báo trước

  const handleIncrease = () => {
    // let newNumber = number + 1;
    // Có thể viết trực tiếp luôn
    setNumber(number + 1);
  };

  return (
    <div className="m-5">
      <div className="card text-left" style={{ width: 200, height: 300 }}>
        <img
          style={{ width: 200, height: 200 }}
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="123"
        />
        <div className="card-body">
          <h4 className="card-title text-danger">{number}♥</h4>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
