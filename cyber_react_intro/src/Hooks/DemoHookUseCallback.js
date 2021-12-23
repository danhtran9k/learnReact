// imrs -> import useState snippet
import React, { useState, useCallback } from 'react';
import ChildUseCallback from './ChildUseCallback';
import ChildUseCallbackNoCondition from './ChildUseCallbackNoCondition';
import ChildUseCallbackNoProps from './ChildUseCallbackNoProps';

export default function DemoHookUseCallback() {
  let [like, setLike] = useState(1);
  let [sub, setSub] = useState(10);
  let primitiveValue = 'primitive';

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };

  let callBackRenderNotifyNoRender = useCallback(renderNotify, []);
  //   Viết như trên sẽ ko bao giờ update
  let callBackRenderNotify = useCallback(renderNotify, [sub]);
  //   Tuy nhiên hàm render do chứa ${like} nhưng useCallback lại ko dùng
  // -> ESLint sẽ Warning

  //   Khi log bên trong return sẽ thấy mỗi lần {like hay biến bất kì} thay đổi thì cả comp cha cũng re-render
  //   -> hàm noti được tạo mới (tất cả nói chung -> chỉ có primitive thì memo mới nhận biết là ko đổi) và đưa vô props
  // -> memo thấy hàm mới (vùng nhớ tham chiếu mới) nên sẽ render lại - xảy ra khi ko phải biến đó thay đổi


  // Giải thích tại sao truyền vô component on vẫn thay đổi like
  // -> hàm Notify sẽ bị tạo mới mỗi lần với KQ return tĩnh khác nhau và được truyền qua props xuống con

  // Vấn đề truyền ở đây thì ${like} đang tương tự gán với this.like ở class cha,
  // -> nhưng bản chất thì do kết quả return của hàm được thay đổi mỗi khi cha re-render chứ ko phải like được binding ngầm xuống tới tận con về cùng 1 vùng nhớ như class

  // =================================
  // Tuy nhiên ở đây ta muốn notify trong con ko thay đổi -> tức là trong comp con chỉ nhận số like lúc vừa init từ cha !!

  return (
    <div>
      <div className="m-5">
        <h4>Like: {like} ♥</h4>
        <span
          style={{ cursor: 'pointer', color: 'red', fontSize: 20 }}
          onClick={() => {
            setLike(like + 1);
          }}
        >
          ♥+
        </span>
        <span
          style={{ cursor: 'pointer', color: 'green', fontSize: 20 }}
          onClick={() => {
            setLike(like);
          }}
        >
          ♥ ko đổi
        </span>
        <br />
        <h4>subscribe: {sub} </h4>
        <span
          style={{ cursor: 'pointer', color: 'red', fontSize: 20 }}
          onClick={() => {
            setSub(sub + 1);
          }}
        >
          subscribe +
        </span>
        <span
          style={{ cursor: 'pointer', color: 'green', fontSize: 20 }}
          onClick={() => {
            setSub(sub);
          }}
        >
          subscribe ko đổi
        </span>
        {console.log('===check Child memo render ===')}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ChildUseCallback
                index="child-1-condition"
                renderNotify={renderNotify}
              />
              <hr />
              <ChildUseCallback
                index="child-2-condition"
                renderNotify={renderNotify}
              />
              <hr />
            </div>
            <div className="col-6">
              <ChildUseCallbackNoCondition
                index="child-3-norender"
                renderNotify={callBackRenderNotifyNoRender}
              />
              <hr />
              <ChildUseCallbackNoCondition
                index="child-4-renderwSub"
                renderNotify={callBackRenderNotify}
              />
              <hr />
            </div>
          </div>
        </div>
        {/* <ChildUseCallbackNoProps primitiveValue={like} /> */}
        {/* Nếu là like thì props thay đổi hiển nhiên sẽ thay đổi */}
        <ChildUseCallbackNoProps
          index="child-final"
          primitiveValue={primitiveValue}
        />
      </div>
    </div>
  );
}
