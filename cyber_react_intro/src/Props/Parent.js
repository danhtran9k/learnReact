import React, { Component } from 'react';
import ChildClass from './ChildClass';
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {
  // Cẩn thận viết nhầm src - source  thành scr !!
  src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/233px-Google_2015_logo.svg.png';

  name = 'google logo';

  render() {
    return (
      <div>
        <ChildClass propSource={this.src} name={this.name} alt={this.name} />
        <ChildClass
          propSource="https://upload.wikimedia.org/wikipedia/commons/7/7e/Google_1998_logo.png"
          name="G logo 2"
          alt="G logo 2"
        />
        <hr></hr>
        <ChildFunctional
          propSource={this.src}
          name={this.name}
          alt={this.name}
        />
      </div>
    );
  }
}
