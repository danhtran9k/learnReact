// imrse snippet
import React, { useState, useEffect } from 'react';

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);

  console.log('render Child - demo useEff');

  /**
   

  useEffect(() => {
    effect;
    // viết cho didUpdate


    return () => {
      cleanup;

      // Viết cho willUnmount
    };

    // State tương ứng ??
  }, [input]);


   */

  // Cách viết theo DidUpdate phải có state ở tham số thứ 2 mới ok dù sẽ ko xài
  // Ở đây thêm 1 số button về number để test thêm và tránh warning
  
  // Will Unmount cũng chỉ chạy trong Did Update
  useEffect(() => {
    console.log(' child DID update');
    return () => {
      console.log('child WILL UNmount');
    };
  }, [number]);

  return (
    <div>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-primary">Gửi</button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number + 1);
          //   Nếu viết number ++ thì console log sẽ bị lag trễ 1 nhịp !!
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number);
        }}
      >
        unchange num
      </button>
    </div>
  );
}
