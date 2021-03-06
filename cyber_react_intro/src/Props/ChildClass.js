import React, { Component } from 'react';

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.propSource}
          style={{ width: 50 }}
          alt={this.props.name}
        />

        <div style={{ width: 225 }} className="card text-left">
          <img
            className="card-img-top"
            src={this.props.propSource}
            alt={this.props.name}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
