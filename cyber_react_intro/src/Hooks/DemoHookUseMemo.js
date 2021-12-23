import React, { useMemo, useState } from 'react';
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo() {
  /**
   * Khi setLike -> toàn bộ function chạy lại
   * cart mới cũng được sinh ra -> Child render table từ cart sẽ rerender
   *
   */
  let [like, setLike] = useState(1);

  let cartInitial = [
    { id: 1, name: 'iphone', price: 1000 },
    { id: 2, name: 'htc phone', price: 2000 },
    { id: 3, name: 'lg phone', price: 3000 },
  ];

  // vẫn báo lỗi React Hook useMemo has a missing dependency: 'cartInitial'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps
  const cartMemo = useMemo(() => cartInitial, []); // eslint-disable-line
  //   Nếu muốn like thay đổi -> tạo lại obj cart mới lưu vào cartMemo thì viết như bên dưới
  //   const cartMemo_like = useMemo(() => cart, [like]);

  // tuy nhiên cách viết gọi hàm lại ko báo lỗi
  const renderCart = () => {
    console.log('Func return obj to pass in useMemo');
    return [
      { id: 1, name: 'iphone', price: 1000 },
      { id: 2, name: 'htc phone', price: 2000 },
      { id: 3, name: 'lg phone', price: 3000 },
    ];
  };

  //   Hàm trả về obj thì có thể dùng useMemo
  const cartMemoByFunc = useMemo(renderCart, []);
  // Viết như trên thì ok ko bị warning

  const cartMemoByFuncWLike = useMemo(() => {
    console.log('=== memo w Like below ===');
    return renderCart();
  }, [like]); // eslint-disable-line

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
      {/* <ChildUseMemo cart={cartInitial} title={'cartInitial'} /> */}
      <ChildUseMemo cart={cartMemo} title={'cartMemo'} />
      <hr />
      {/* <ChildUseMemo cart={cartMemo} /> */}
      <ChildUseMemo cart={cartMemoByFunc} title={'cartMemoByFunc'} />
      <ChildUseMemo cart={cartMemoByFuncWLike} title={'cartMemoByFuncWLike'} />
    </div>
  );
}

/**
 * useCallback lưu trữ lại 1 hàm bất kì
 * useMemo lưu trữ 1 hàm nhưng trả về 1 obj,
 * -> NHƯNG ko truyền trực tiếp obj vào được
 * -> phải truyền thông qua anony func
 *
 */

/**
 * https://reactjs.org/docs/react-api.html#reactpurecomponent
 * https://reactjs.org/docs/react-api.html#reactmemo
 */

/**
 *
 * https://reactjs.org/docs/hooks-reference.html#usememo
 * https://reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations
 * https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
 *
 * ->
 * Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed.
 */
