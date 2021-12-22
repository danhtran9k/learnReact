// imrse snippet
import React, { useState, useEffect } from 'react';

export default function DemoHookUseEffect() {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);
  console.log(like);
  // Nếu like thay đổi thì chỉ những eff liên quan like mới chạy !!

  //useEffect là hàm chạy sau khi giao diện render thay cho componentDidUpdate ,componentDidMount , componentWillUnmount trong mọi trường hợp
  //   Thay cho các life Cycle chạy sau khi render()
  //   useEffect(() => {
  //     console.log('didmount');
  //     console.log('didupdate');
  //   });

  // Cách viết thay thế cho componentDidMount,
  // tham số thứ 2 là mảng rỗng
  useEffect(() => {
    console.log('didmount');
  }, []);

  // Cách viết thay thế componentDidUpdate
  useEffect(() => {
    console.log('didupdate khi number thay đổi');
  }, [number]);
  // number là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy
  // Like thay đổi sẽ ko chạy eff này

  console.log('render');
  //   Log re sẽ thấy render chạy trước log trong useEffect dù được khai báo trước

  const handleIncrease = () => {
    // let newNumber = number + 1;
    // Có thể viết trực tiếp luôn
    setNumber(number + 1);
  };

  const constNumber = () => {
    // let newNumber = number + 1;
    // Có thể viết trực tiếp luôn
    setNumber(number);
  };
  // state ko đổi thì ko có bất cứ sự render lại nào cả
  // compare value / obj ?

  return (
    <div className="m-5">
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <div className="card text-left" style={{ width: 200, height: 300 }}>
        <img
          style={{ width: 200, height: 200 }}
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="something"
        />
        <div className="card-body">
          <h4 className="card-title text-danger">{number}♥</h4>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
      <button className="btn btn-success" onClick={constNumber}>
        unchange num
      </button>
      {/* Tuy nhiên click like xong click về const Number thì lại render !!  */}
    </div>
  );
}
