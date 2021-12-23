// snippet imrs -> memo
import React, { memo } from 'react';

function ChildUseCallbackNoCondition(props) {
//   let title = 'cyberlearn';
//   let object = { id: 1, name: 'khải' };

//   console.log('title', title);
//   console.log('object', object);
  console.log(`re-render ${props.index}`);

  return (
    <div>
      <h1>{props.index}</h1>
      <small>
        {props.renderNotify()}
      </small>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(ChildUseCallbackNoCondition);
