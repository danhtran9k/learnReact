import React, { Component } from 'react';
import Content from './Content';
import Footer from './Footer';
import HeaderDemo from './HeaderDemo';
import Navigation from './Navigation';

// chỉ return được 1 div lớn bọc tất cả lại
// container-fluid sẽ sinh padding nhỏ nên phải để header ở ngoài
// Chữ center do add.css - check qua dev tool
// Bản thân col là 1 container nên sẽ có padding (footer ko css sẽ thấy)
// bgc phải vào chung div chứa class col mới ok

export default class Home extends Component {
  render() {
    //   Style theo kiểu jsx, camelCase và style là 1 obj
    //   Khi imput vào lại phải dưới dạng 1 obj nên sẽ {{}} lồng nhau
    let style = {
      padding: 0,
      marginLeft: 0,
    };
    // React hên xui sẽ hiểu từ class thay vì className
    // Tuy nhiên đã có tag component rồi thì ko dc dùng ext convert nữa
    // chỉ convert được html thuần và đúng cấu trúc 1 lần duy nhất
    // Phải ctrl+f2 hoặc Ctrl+D replace tay
    return (
      <div>
        <HeaderDemo />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 bg-success">
              <Navigation />
            </div>
            <div style={style} className="col-8">
              <Content />
            </div>
            <div className="col-12">
                <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
