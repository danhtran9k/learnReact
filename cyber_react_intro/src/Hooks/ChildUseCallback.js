// snippet imrs -> memo
import React, { memo } from 'react';

function ChildUseCallback(props) {
//   let title = 'cyberlearn';
//   let object = { id: 1, name: 'khải' };

//   console.log('title', title);
//   console.log('object', object);
  console.log(`re-render ${props.index}`);

  return (
    <div>
      <h1>{props.index}</h1>
      <small>
        {props.index === 'child-1-condition' ? props.renderNotify() : 'no_render_notify'}
      </small>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(ChildUseCallback);
// Chú ý memo khác với useMemo
// https://reactjs.org/docs/react-api.html#reactmemo
// https://reactjs.org/docs/hooks-reference.html#usememo
// https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate

// memo là HOC
