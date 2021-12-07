import React, { Component } from 'react';
import Content from './Content';
import HeaderDemo from './HeaderDemo';
import Navigation from './Navigation';

// chỉ return được 1 div lớn bọc tất cả lại
// container-fluid sẽ sinh padding nhỏ nên phải để header ở ngoài
// Chữ center do add.css - check qua dev tool
// Bản thân col là 1 container nên sẽ có padding
// bgc phải vào chung div chứa class col mới ok

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderDemo />
        <div class="container-fluid">
          <div class="row">
            <div class="col-4 bg-success">
              <Navigation />
            </div>
            <div class="col-8">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
