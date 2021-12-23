import React, { useState, useRef } from 'react';
// https://reactjs.org/docs/hooks-reference.html#useref

export default function DemoUseRef(props) {
  let inputUserName = useRef(null);
  let inputPassword = useRef(null);

  // let [userLogin, setUserLogin] = useState({});
  let [userLogin, setUserLogin] = useState({ userName: '', userPass: '' });
  //   Dùng use ref để DOM tới DOM ele và get target.value (this.target.value nếu trong class)

  let userName = '';
  let userPass = useRef('');
  //   Sẽ ko render lại đối với useRef

  const handleLogin = () => {
    //   DOM tới vị trí
    console.log('--------Login--------');
    console.log(
      'inputUserName.current.className :',
      inputUserName.current.className
    );
    console.log('inputPassword.current.value :', inputPassword.current.value);

    // Ta log trước khi gán lại giá trị phía dưới để ktra
    // Check xem giá trị nào bị khởi tạo lại khi re-render

    console.log('userName: ', userName);
    console.log('userLogin.userName: ', userLogin.userName);
    // userName mỗi khi component re-render sẽ bị reset

    console.log('userPass: ', userPass);
    console.log('userPass', userPass.current);
    console.log('userLogin.userPass: ', userLogin.userPass);
    //  userPass dùng useRef sẽ ko bị re-initialize khi re-render

    userName = 'user re-initialize';
    userPass.current = 'pass store with useRef';

    setUserLogin({
      userName,
      userPass: userPass.current,
    });
  };

  /**
   * Click login lần 1 -> state userLogin = {userName: abc}
   * -> component rerender -> userName biến ở ngoài bị reset lại thành rỗng, nhưng userLogin.userName = 'abc' (state mới)
   * các giá trị len var const bị khai báo lại - re-initialize
   * Để lưu lại thì useMemo - useCallback
   * Ngoài ra cũng có thể dùng useRef để lưu lại giá tr5i cũ
   */

  //   ============================================

  console.log('=== demo re-render ===');
  return (
    <div className="container">
      <h3>Login</h3>
      <div className="form-group">
        <h3>UserName</h3>
        <input ref={inputUserName} name="userName" className="form-control" />
      </div>
      <div className="form-group">
        <h3>Password</h3>
        <input ref={inputPassword} name="passWord" className="form-control" />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

/**
 * https://www.reactenlightenment.com/basic-react-components/6.9.html
 * ref attribute -> React built-in
 * https://reactjs.org/docs/refs-and-the-dom.html
 * https://reactjs.org/docs/hooks-reference.html#useref
 *
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
 * --> có đẩy mã độc inject vào được ko ?
 *
 * old version:
 * https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs
 * https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
 * https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
 * callbackRef
 */
