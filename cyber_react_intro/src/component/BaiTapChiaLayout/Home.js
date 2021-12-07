import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">-header</div>
        <div class="row">
          <div class="col-4">-navigation</div>
          <div class="col-8">-content</div>
        </div>
      </div>
    );
  }
}
