import React, { useEffect, useState } from 'react';

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);

  console.log('render ChildUseEffect');

  return (
    <div>
      <textarea></textarea> <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}
