import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavLink className="dropdown-item" to="/demolayout">
          BaiTapChiaLayout
        </NavLink>
        <NavLink className="dropdown-item" to="/thlayout">
          BaiTapThucHanhLayout
        </NavLink>
        <NavLink className="dropdown-item" to="/databinding">
          Data Binding
        </NavLink>
        <NavLink className="dropdown-item" to="/handleevent">
          Handle Event
        </NavLink>
      </div>
    );
  }
}
