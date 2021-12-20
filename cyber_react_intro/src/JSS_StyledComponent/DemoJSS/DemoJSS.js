import React, { Component } from 'react';
import {ButtonDemo } from '../Components/ButtonDemo';

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <ButtonDemo className="button_style">Hello Anaki</ButtonDemo>
        <ButtonDemo >Button no class</ButtonDemo>
      </div>
    );
  }
}
