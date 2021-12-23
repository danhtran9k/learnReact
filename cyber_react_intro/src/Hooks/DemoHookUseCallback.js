// imrs -> import useState snippet
import React, { useState } from 'react';
import ChildUseCallback from './ChildUseCallback';

export default function DemoHookUseCallback() {
  let [like, setLike] = useState(1);

  return (
    <div>
      <div className="m-5">
        Like: {like} ♥
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
        <ChildUseCallback />
      </div>
    </div>
  );
}
