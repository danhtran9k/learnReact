import React, { Component } from 'react';
import {ButtonDemo, SmallButton } from '../Components/ButtonDemo';

export default class DemoJSS extends Component {
    // button nay tương tự directive component trong angular
// prop này chỉ dùng thay đổi css ... ko dùng binding dữ liệu
// Giao diện thẻ chỉ thay đổi qua innerHTML và css, hiệu ứng

  render() {
    return (
      <div>
        <ButtonDemo >Button no class</ButtonDemo>
        <ButtonDemo className="button_style">Hello Anaki</ButtonDemo>
        <ButtonDemo primary fontSize2x>Button w props</ButtonDemo>
        <hr></hr>
        <SmallButton>hello khải</SmallButton>
      </div>
    );
  }
}
