import React, { useState } from 'react';
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo() {
  let [like, setLike] = useState(1);
  
  let cart = [
    { id: 1, name: 'iphone', price: 1000 },
    { id: 2, name: 'htc phone', price: 2000 },
    { id: 3, name: 'lg phone', price: 3000 },
  ];

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <ChildUseMemo cart={cart} />
    </div>
  );
}
