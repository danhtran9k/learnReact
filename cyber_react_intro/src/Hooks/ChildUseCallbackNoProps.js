import React, { memo } from 'react';

function ChildUseCallbackNoProps(props) {
  //   let title = 'cyberlearn';
  //   let object = { id: 1, name: 'khải' };

  //   console.log('title', title);
  //   console.log('object', object);
  console.log(`Child - no - props w ${props.primitiveValue}`);

  return (
    <div>
      <small>Child - no -props w {props.primitiveValue}</small>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(ChildUseCallbackNoProps);
