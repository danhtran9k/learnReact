import React, { memo } from 'react';

function ChildUseCallbackNoProps(props) {
  //   let title = 'cyberlearn';
  //   let object = { id: 1, name: 'khải' };

  //   console.log('title', title);
  //   console.log('object', object);
  console.log(`render Child - no - props w primitive: ${props.primitiveValue}`);

  return (
    <div>
      <h1>{props.index}</h1>
      <small>Child - no -props w primitive: {props.primitiveValue}</small>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(ChildUseCallbackNoProps);
