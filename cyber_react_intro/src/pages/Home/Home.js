import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light">
        <NavLink className="d-block" to="/demolayout">
          BaiTapChiaLayout
        </NavLink>
        <NavLink className="d-block" to="/thlayout">
          BaiTapThucHanhLayout
        </NavLink>
        <NavLink className="d-block" to="/databinding">
          Data Binding
        </NavLink>
        <NavLink className="d-block" to="/handleevent">
          Handle Event
        </NavLink>
        <NavLink className="d-block" to="/rendercondition">
          Rendering Condition
        </NavLink>
        <NavLink className="d-block" to="/statedemo">
          State Demo
        </NavLink>
        <NavLink className="d-block txtGlobalStyling" to="/stylingdemo">
          Styling Demo
        </NavLink>
      </div>
    );
  }
}
