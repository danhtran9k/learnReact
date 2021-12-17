import React, { Component } from 'react';
import LikeProfile from './LikeProfile';
import ModelProfile from './ModelProfile';

// 2 thự mục Provider va Consumer đặt _ ở trước chủi để tránh nhầm lẫn,
// ko phải quy ước
export default class ContextDemo extends Component {
  render() {
    return (
      <div className="container">
        <ModelProfile />
        <LikeProfile />
      </div>
    );
  }
}
