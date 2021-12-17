import React, { Component } from 'react';
import LikeProfile from './LikeProfile';
import ModelProfile from './ModelProfile';
import ModelStateProvider from './_Provider/ModelStateProvider';
// 2 thự mục Provider va Consumer đặt _ ở trước chủi để tránh nhầm lẫn,
// ko phải quy ước
export default class ContextDemo extends Component {
  render() {
    return (
      // Các Child component này sẽ truyền ngược lại vào class ModelStateProvider được định nghĩa trước
      <ModelStateProvider>
        <div className="container">
          <ModelProfile />
          <LikeProfile />
        </div>
      </ModelStateProvider>
    );
  }
}
