/**
 * 3 dạng style css
 * style trực tiếp js thuần qua DOM

 */
import React, { Component } from 'react';
import './Styling.css';
// * Với file css ko có module thì phạm vi sẽ là toàn bộ dự án
// * -> vì đây là SPA single page application, ko quan tâm file import
// * -> css đè lẫn lộn nhau ko phân cấp, khó quản
// * page Home có class txt bị dính css !!
// -> hotfix thông qua cố định id - duy nhất nhưng ko hay
import style from './Styling.module.css';
import Child from './Child';

export default class Styling extends Component {
  render() {
    //Lưu ý: viết dưới dạng thuộc tính document.getElmentById('id').style.backgroundColor
    // Cách 3 inline style trực tiếp lên thẻ
    const styleText = {
      color: 'pink',
      padding: '15px',
      backgroundColor: 'black',
    };

    return (
      <div>
        <Child />
        <p className="txtGlobalStyling"> Global css styling</p>
        <span className={style.txtStyle}>Module css styling</span>
        <p style={styleText}>inline css direct</p>
        <p
          style={{
            color: 'blue',
            padding: '15px',
            backgroundColor: 'green',
          }}
        >
          inline css without css var
        </p>
      </div>
    );
  }
}
