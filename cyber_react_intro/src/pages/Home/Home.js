import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light">
        <h5>Khóa 1 - React cơ bản</h5>
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
        <NavLink className="d-block" to="/renderloopdemo">
          Render loop demo
        </NavLink>
        <br></br>
        <h5>Khóa 2 - Truyền Data giữa các component</h5>
        <NavLink className="d-block" to="/demoprop">
          Demo prop
        </NavLink>
        <NavLink className="d-block" to="/demopure">
          Demo pure component
        </NavLink>
        <NavLink className="d-block" to="/democontext">
          Demo Context
        </NavLink>
        <h5>Khóa 3</h5>
        <NavLink className="d-block" to="/demojss">
          Demo JSS
        </NavLink>

        {/* demo */}
      </div>
    );
  }
}
