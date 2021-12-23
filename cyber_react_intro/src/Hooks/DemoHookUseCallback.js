// imrs -> import useState snippet
import React, { useState, useCallback } from 'react';
import ChildUseCallback from './ChildUseCallback';
import ChildUseCallbackNoProps from './ChildUseCallbackNoProps';

export default function DemoHookUseCallback() {
  let [like, setLike] = useState(1);
  let primitiveValue = 'primitive';

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };

  
  //   Khi log bên trong return sẽ thấy mỗi lần like thay đổi thì cả comp cha cũng re-render  -> hàm noti được tạo mới (tất cả nói chung -> chỉ có primitive thì memo mới nhận biết là ko đổi) và đưa vô props
  // -> memo thấy callback mới trong props nên cũng render lại hàm con
  // -> hàm Notify sẽ bị tạo mới mỗi lần với KQ return tĩnh khác nhau và được truyền qua props xuống con

  // Vấn đề truyền ở đây thì ${like} đang tương tự gán với this.like ở class cha,
  // -> nhưng bản chất thì do kết quả return của hàm được thay đổi mỗi khi cha re-render chứ ko phải like được binding ngầm xuống tới tận con về cùng 1 vùng nhớ như class

  // =================================
  // Tuy nhiên ở đây ta muốn notify trong con ko thay đổi -> tức là trong comp con chỉ nhận số like lúc vừa init từ cha !!

  return (
    <div>
      <div className="m-5">
        Like: {like} ♥
        <br />
        <span
          style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
          onClick={() => {
            setLike(like + 1);
          }}
        >
          ♥+
        </span>
        <span
          style={{ cursor: 'pointer', color: 'green', fontSize: 35 }}
          onClick={() => {
            setLike(like);
          }}
        >
          ♥ ko đổi
        </span>
        <br />
        {console.log('===check Child memo render ===')}
        <ChildUseCallback index="child-1" renderNotify={renderNotify} />
        <hr />
        <ChildUseCallback index="child-2" renderNotify={renderNotify} />
        <hr />
        <ChildUseCallbackNoProps primitiveValue={primitiveValue} />
      </div>
    </div>
  );
}
