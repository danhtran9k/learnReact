import React, { Component } from 'react';
import parentStyle from './Styling.module.css';

export default class Child extends Component {
  // <span className={style.txtStyle}>Module css styling</span>
  // ko dùng vậy được nếu chưa import lại
  render() {
    return (
      <div>
        <p className="txtGlobalStyling">
          Child Component with global css class name
        </p>
        <p className="txtStyle">Child w Parent css class name</p>
        <span className={parentStyle.txtStyle}>
          Module css styling in Child
        </span>
      </div>
    );
  }
}
