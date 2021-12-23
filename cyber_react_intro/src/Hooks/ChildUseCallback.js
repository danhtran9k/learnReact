import React from 'react';

export default function ChildUseCallback() {
  let title = 'cyberlearn';
  let object = { id: 1, name: 'khải' };

  console.log('title', title);
  console.log('object', object);
  console.log('re-render');

  return (
    <div>
      <textarea></textarea>
      <br /> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}
