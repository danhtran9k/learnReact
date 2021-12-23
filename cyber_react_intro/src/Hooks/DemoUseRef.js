import React, { useState, useRef } from 'react';
// https://reactjs.org/docs/hooks-reference.html#useref

export default function DemoUseRef(props) {
  let inputUserName = useRef(null);
  let inputPassword = useRef(null);

  let [userLogin, setUserLogin] = useState({});

  const handleLogin = () => {
    //   DOM tới vị trí
    console.log(
      'inputUserName.current.className :',
      inputUserName.current.className
    );
    console.log('inputPassword.current.value :', inputPassword.current.value);


  };

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